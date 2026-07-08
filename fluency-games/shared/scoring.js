/* Shared scoring helpers for all fluency games.
   Every game reports the same three measures: words-per-minute,
   accuracy %, and a comprehension score. Attaches to window.FluencyShared. */
(function () {
  'use strict';

  /* WPM from a word count and elapsed seconds. */
  function wordsPerMinute(wordCount, seconds) {
    if (!seconds || seconds <= 0) return 0;
    return Math.round(wordCount / (seconds / 60));
  }

  /* Whole-number percent, 0 when total is 0. */
  function accuracyPercent(correct, total) {
    if (!total) return 0;
    return Math.round((correct / total) * 100);
  }

  /* Grade an array of chosen option indexes against a passage's questions.
     Returns { correct, total, percent }. Unanswered (null/undefined) counts
     as incorrect. */
  function comprehensionScore(chosenIndexes, questions) {
    let correct = 0;
    questions.forEach(function (q, i) {
      if (chosenIndexes[i] === q.answerIndex) correct++;
    });
    return {
      correct: correct,
      total: questions.length,
      percent: accuracyPercent(correct, questions.length)
    };
  }

  /* Kid-friendly result tier from an accuracy percent. */
  function ratingFor(percent) {
    if (percent >= 100) return { stars: 3, emoji: '🌟🌟🌟', message: 'Perfect! You are a fluency superstar!' };
    if (percent >= 50)  return { stars: 2, emoji: '⭐⭐', message: 'Great job! You are almost there!' };
    if (percent > 0)    return { stars: 1, emoji: '⭐', message: 'Nice try! Read it again and go for more stars!' };
    return { stars: 0, emoji: '💪', message: 'Good practice! Every read makes you stronger — try again!' };
  }

  window.FluencyShared = Object.assign(window.FluencyShared || {}, {
    wordsPerMinute: wordsPerMinute,
    accuracyPercent: accuracyPercent,
    comprehensionScore: comprehensionScore,
    ratingFor: ratingFor
  });
})();
