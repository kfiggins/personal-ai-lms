import { useState, useEffect, useCallback } from "react";
import * as store from "../utils/progressStore.js";

export function useProgress() {
  const [progress, setProgress] = useState(store.getProgress);

  // Update streak on mount
  useEffect(() => {
    const updated = store.updateStreak();
    setProgress(updated);
  }, []);

  const refresh = useCallback(() => {
    setProgress(store.getProgress());
  }, []);

  const markModuleComplete = useCallback((moduleId, quizScore, quizTotal) => {
    const updated = store.markModuleComplete(moduleId, quizScore, quizTotal);
    setProgress(updated);
    return updated;
  }, []);

  const getModuleProgress = useCallback((moduleId) => {
    return store.getModuleProgress(moduleId);
  }, []);

  const isModuleComplete = useCallback((moduleId) => {
    return store.isModuleComplete(moduleId);
  }, []);

  const getCategoryProgress = useCallback((categoryId) => {
    return store.getCategoryProgress(categoryId);
  }, []);

  const getOverallProgress = useCallback(() => {
    return store.getOverallProgress();
  }, []);

  const addToReviewQueue = useCallback((moduleId, questionId, wasCorrect) => {
    const updated = store.addToReviewQueue(moduleId, questionId, wasCorrect);
    setProgress(updated);
    return updated;
  }, []);

  const getReviewableQuestions = useCallback(() => {
    return store.getReviewableQuestions();
  }, []);

  const getReviewQueueSize = useCallback(() => {
    return store.getReviewQueueSize();
  }, []);

  const recordReviewAttempt = useCallback((questionId, quality) => {
    const updated = store.recordReviewAttempt(questionId, quality);
    setProgress(updated);
    return updated;
  }, []);

  const resetProgress = useCallback(() => {
    const fresh = store.resetProgress();
    setProgress(fresh);
    return fresh;
  }, []);

  return {
    progress,
    refresh,
    markModuleComplete,
    getModuleProgress,
    isModuleComplete,
    getCategoryProgress,
    getOverallProgress,
    addToReviewQueue,
    getReviewableQuestions,
    getReviewQueueSize,
    recordReviewAttempt,
    resetProgress,
  };
}
