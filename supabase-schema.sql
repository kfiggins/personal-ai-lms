-- Run this in the Supabase SQL Editor (Dashboard > SQL Editor > New query)
-- Normalized schema for the learning management system.

-- 1. Module progress: one row per (user, module)
create table module_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  completed boolean not null default false,
  completed_at timestamptz,
  quiz_score integer,
  quiz_total integer,
  quiz_attempts integer not null default 0,
  last_attempt_at timestamptz,
  primary key (user_id, module_id)
);

-- 2. Quiz history: append-only log of every answer
create table quiz_history (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text,
  question_id text,
  quiz_type text not null default 'module', -- 'module', 'mixed', 'review'
  correct boolean,
  confidence text, -- 'guessing', 'somewhat', 'confident'
  score integer,
  total integer,
  by_module jsonb, -- only for mixed quizzes
  answered_at timestamptz not null default now()
);

-- 3. Spaced repetition review queue: one row per (user, question)
create table review_queue (
  user_id uuid not null references auth.users(id) on delete cascade,
  question_id text not null,
  module_id text not null,
  next_review_at timestamptz not null,
  interval integer not null default 1,
  ease_factor numeric(4,2) not null default 2.50,
  repetitions integer not null default 0,
  primary key (user_id, question_id)
);

-- 4. User streaks: one row per user
create table user_streaks (
  user_id uuid primary key references auth.users(id) on delete cascade,
  current_streak integer not null default 0,
  longest_streak integer not null default 0,
  last_active_date date
);

-- 5. Pre-test results: one row per (user, module)
create table pre_tests (
  user_id uuid not null references auth.users(id) on delete cascade,
  module_id text not null,
  score integer not null,
  total integer not null,
  answers jsonb not null default '[]'::jsonb,
  completed_at timestamptz not null default now(),
  primary key (user_id, module_id)
);

-- 6. User settings: one row per user (small blob, fine as jsonb)
create table user_settings (
  user_id uuid primary key references auth.users(id) on delete cascade,
  data jsonb not null default '{}'::jsonb,
  updated_at timestamptz not null default now()
);

-- 7. User achievements: one row per (user, achievement)
create table user_achievements (
  user_id uuid not null references auth.users(id) on delete cascade,
  achievement_id text not null,
  unlocked_at timestamptz not null default now(),
  primary key (user_id, achievement_id)
);

-- Indexes for common queries
create index quiz_history_user_id on quiz_history(user_id);
create index quiz_history_answered_at on quiz_history(user_id, answered_at);
create index review_queue_next_review on review_queue(user_id, next_review_at);

-- Enable Row Level Security on all tables
alter table module_progress enable row level security;
alter table quiz_history enable row level security;
alter table review_queue enable row level security;
alter table user_streaks enable row level security;
alter table pre_tests enable row level security;
alter table user_settings enable row level security;
alter table user_achievements enable row level security;

-- RLS policies: users can only access their own rows

-- module_progress
create policy "Own data" on module_progress for select using (auth.uid() = user_id);
create policy "Own insert" on module_progress for insert with check (auth.uid() = user_id);
create policy "Own update" on module_progress for update using (auth.uid() = user_id);
create policy "Own delete" on module_progress for delete using (auth.uid() = user_id);

-- quiz_history
create policy "Own data" on quiz_history for select using (auth.uid() = user_id);
create policy "Own insert" on quiz_history for insert with check (auth.uid() = user_id);

-- review_queue
create policy "Own data" on review_queue for select using (auth.uid() = user_id);
create policy "Own insert" on review_queue for insert with check (auth.uid() = user_id);
create policy "Own update" on review_queue for update using (auth.uid() = user_id);
create policy "Own delete" on review_queue for delete using (auth.uid() = user_id);

-- user_streaks
create policy "Own data" on user_streaks for select using (auth.uid() = user_id);
create policy "Own insert" on user_streaks for insert with check (auth.uid() = user_id);
create policy "Own update" on user_streaks for update using (auth.uid() = user_id);

-- pre_tests
create policy "Own data" on pre_tests for select using (auth.uid() = user_id);
create policy "Own insert" on pre_tests for insert with check (auth.uid() = user_id);
create policy "Own update" on pre_tests for update using (auth.uid() = user_id);

-- user_settings
create policy "Own data" on user_settings for select using (auth.uid() = user_id);
create policy "Own insert" on user_settings for insert with check (auth.uid() = user_id);
create policy "Own update" on user_settings for update using (auth.uid() = user_id);

-- user_achievements
create policy "Own data" on user_achievements for select using (auth.uid() = user_id);
create policy "Own insert" on user_achievements for insert with check (auth.uid() = user_id);
create policy "Own delete" on user_achievements for delete using (auth.uid() = user_id);

-- Auto-update updated_at on user_settings
create or replace function update_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger user_settings_updated_at
  before update on user_settings
  for each row execute function update_updated_at();
