// Thin wrapper around DataContext for backwards compatibility.
// All components that use useProgress() continue to work unchanged.

import { useData } from '../contexts/DataContext.jsx'

export function useProgress() {
  const data = useData()

  return {
    progress: data.progress,
    refresh: () => {},
    markModuleComplete: data.markModuleComplete,
    getModuleProgress: data.getModuleProgress,
    isModuleComplete: data.isModuleComplete,
    getCategoryProgress: data.getCategoryProgress,
    getOverallProgress: data.getOverallProgress,
    addToReviewQueue: data.addToReviewQueue,
    getReviewableQuestions: data.getReviewableQuestions,
    getReviewQueueSize: data.getReviewQueueSize,
    recordReviewAttempt: data.recordReviewAttempt,
    getCompletedModulesWithScores: data.getCompletedModulesWithScores,
    saveMixedQuizResult: data.saveMixedQuizResult,
    savePreTestResult: data.savePreTestResult,
    getPreTestResult: data.getPreTestResult,
    getCalibrationData: data.getCalibrationData,
    getUnmetPrerequisites: data.getUnmetPrerequisites,
    getLeechQuestions: data.getLeechQuestions,
    isLeechQuestion: data.isLeechQuestion,
    resetProgress: data.resetProgress,
  }
}
