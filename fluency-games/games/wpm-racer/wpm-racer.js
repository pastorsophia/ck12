/* WPM Racer — paced word-by-word reading + comprehension check.
   Uses shared GameTimer, Pacer, scoring, and passage loader. */
(function () {
  'use strict';

  var S = window.FluencyShared;
  var $ = function (id) { return document.getElementById(id); };

  var passages = [];
  var passage = null;       // currently selected passage
  var words = [];           // passage split into words
  var wordSpans = [];       // spans in the reader
  var wordIndex = -1;       // index of the current highlighted word
  var pacer = null;
  var timer = new S.GameTimer();
  var answers = [];         // chosen option index per question

  function show(id) {
    document.querySelectorAll('.screen').forEach(function (s) {
      s.classList.remove('active');
    });
    $(id).classList.add('active');
  }

  /* ---------- pick screen ---------- */
  S.loadPassages().then(function (list) {
    passages = list;
    var box = $('passageList');
    passages.forEach(function (p) {
      var btn = document.createElement('button');
      btn.className = 'menu-card';
      btn.innerHTML =
        '<span class="emoji">📖</span><span><b>' + p.title + '</b>' +
        S.countWords(p.text) + ' words · ' + p.lexileLabel +
        ' · grades ' + p.grades + '</span>';
      btn.addEventListener('click', function () { openPassage(p); });
      box.appendChild(btn);
    });
  }).catch(function (err) {
    var box = $('loadError');
    box.style.display = 'block';
    box.textContent = '😕 ' + err.message;
  });

  /* ---------- read screen ---------- */
  function openPassage(p) {
    passage = p;
    words = S.splitWords(p.text);
    wordIndex = -1;
    $('readTitle').textContent = '📖 ' + p.title;
    $('readMeta').textContent =
      words.length + ' words · ' + p.lexileLabel + ' · grades ' + p.grades;
    $('raceStatus').textContent = "Press start when you're ready to read along!";
    $('startBtn').disabled = false;

    var reader = $('readerText');
    reader.innerHTML = '';
    wordSpans = words.map(function (w) {
      var span = document.createElement('span');
      span.className = 'word';
      span.textContent = w;
      reader.appendChild(span);
      reader.appendChild(document.createTextNode(' '));
      return span;
    });
    show('screen-read');
  }

  function stopPacer() {
    if (pacer) { pacer.stop(); pacer = null; }
  }

  $('paceSlider').addEventListener('input', function () {
    $('paceValue').textContent = this.value;
    if (pacer) pacer.setWpm(this.value); // live speed change mid-race
  });

  $('startBtn').addEventListener('click', function () {
    $('startBtn').disabled = true;
    $('raceStatus').textContent = 'Read along out loud with the green word! 🗣️';
    timer.start();
    pacer = new S.Pacer(Number($('paceSlider').value), advanceWord);
    pacer.start();
  });

  function advanceWord() {
    if (wordIndex >= 0) {
      wordSpans[wordIndex].classList.remove('current');
      wordSpans[wordIndex].classList.add('read');
    }
    wordIndex++;
    if (wordIndex >= words.length) {
      finishReading();
      return;
    }
    wordSpans[wordIndex].classList.add('current');
  }

  function finishReading() {
    stopPacer();
    timer.stop();
    buildQuiz();
    show('screen-quiz');
  }

  $('backBtn').addEventListener('click', function () {
    stopPacer();
    timer.stop();
    show('screen-pick');
  });

  /* ---------- quiz screen ---------- */
  function buildQuiz() {
    answers = passage.questions.map(function () { return null; });
    $('submitBtn').disabled = true;
    var area = $('quizArea');
    area.innerHTML = '';
    passage.questions.forEach(function (q, qi) {
      var block = document.createElement('div');
      block.className = 'question-block';
      var title = document.createElement('p');
      title.className = 'q';
      title.textContent = (qi + 1) + '. ' + q.question;
      block.appendChild(title);
      q.options.forEach(function (opt, oi) {
        var btn = document.createElement('button');
        btn.className = 'option';
        btn.textContent = opt;
        btn.addEventListener('click', function () {
          answers[qi] = oi;
          block.querySelectorAll('.option').forEach(function (b) {
            b.classList.remove('picked');
          });
          btn.classList.add('picked');
          $('submitBtn').disabled = answers.some(function (a) { return a === null; });
        });
        block.appendChild(btn);
      });
      area.appendChild(block);
    });
  }

  $('submitBtn').addEventListener('click', function () {
    var comp = S.comprehensionScore(answers, passage.questions);
    var wpm = S.wordsPerMinute(words.length, timer.seconds);
    var rating = S.ratingFor(comp.percent);

    $('statWpm').textContent = wpm;
    $('statAccuracy').textContent = comp.percent + '%';
    $('statComprehension').textContent = comp.correct + ' / ' + comp.total;
    $('resultMessage').textContent = rating.message;
    $('resultEmoji').textContent = rating.emoji;
    $('resultTime').textContent =
      'You finished "' + passage.title + '" in ' + timer.seconds.toFixed(1) + ' seconds.';
    show('screen-result');
  });

  /* ---------- result screen ---------- */
  $('againBtn').addEventListener('click', function () {
    openPassage(passage);
  });
  $('fasterBtn').addEventListener('click', function () {
    var slider = $('paceSlider');
    slider.value = Math.min(200, Number(slider.value) + 10);
    $('paceValue').textContent = slider.value;
    openPassage(passage);
  });
  $('newBtn').addEventListener('click', function () {
    show('screen-pick');
  });
})();
