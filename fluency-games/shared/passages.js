/* Shared passage loader for all fluency games.
   Fetches /fluency-games/data/passages.json and provides word helpers.
   Attaches to window.FluencyShared. */
(function () {
  'use strict';

  var cache = null;

  /* Load all passages, cached after the first call.
     `url` defaults to the data folder relative to a game living at
     fluency-games/games/<name>/. */
  function loadPassages(url) {
    url = url || '../../data/passages.json';
    if (cache) return Promise.resolve(cache);
    return fetch(url)
      .then(function (res) {
        if (!res.ok) throw new Error('HTTP ' + res.status + ' loading ' + url);
        return res.json();
      })
      .then(function (json) {
        cache = json.passages;
        return cache;
      })
      .catch(function (err) {
        if (location.protocol === 'file:') {
          throw new Error(
            'Passages could not load because the game was opened as a file. ' +
            'Run "python3 -m http.server" in the project folder and open it ' +
            'through http://localhost:8000/ instead. (' + err.message + ')'
          );
        }
        throw err;
      });
  }

  function getPassage(passages, id) {
    return passages.find(function (p) { return p.id === id; }) || null;
  }

  /* Split passage text into displayable words (whitespace-delimited,
     punctuation stays attached to its word). */
  function splitWords(text) {
    return text.trim().split(/\s+/);
  }

  function countWords(text) {
    return splitWords(text).length;
  }

  window.FluencyShared = Object.assign(window.FluencyShared || {}, {
    loadPassages: loadPassages,
    getPassage: getPassage,
    splitWords: splitWords,
    countWords: countWords
  });
})();
