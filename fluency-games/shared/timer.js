/* Shared timing utilities for all fluency games.
   Attaches GameTimer and Pacer to window.FluencyShared. */
(function () {
  'use strict';

  /* Stopwatch: measures how long a reading actually took. */
  class GameTimer {
    constructor() {
      this._startMs = 0;
      this._stopMs = 0;
      this.running = false;
    }
    start() {
      this._startMs = Date.now();
      this._stopMs = 0;
      this.running = true;
      return this;
    }
    stop() {
      if (this.running) {
        this._stopMs = Date.now();
        this.running = false;
      }
      return this;
    }
    /* Elapsed seconds, live while running or frozen after stop(). */
    get seconds() {
      if (!this._startMs) return 0;
      const end = this.running ? Date.now() : this._stopMs;
      return (end - this._startMs) / 1000;
    }
  }

  /* Pacer: fires onTick at a words-per-minute cadence. Drives word-by-word
     passage display. WPM can be changed live via setWpm. */
  class Pacer {
    constructor(wpm, onTick) {
      this.wpm = wpm;
      this.onTick = onTick;
      this._timeout = null;
      this.running = false;
    }
    _intervalMs() {
      return 60000 / this.wpm;
    }
    start() {
      if (this.running) return this;
      this.running = true;
      const step = () => {
        if (!this.running) return;
        this.onTick();
        if (this.running) {
          this._timeout = setTimeout(step, this._intervalMs());
        }
      };
      this._timeout = setTimeout(step, this._intervalMs());
      return this;
    }
    stop() {
      this.running = false;
      if (this._timeout) {
        clearTimeout(this._timeout);
        this._timeout = null;
      }
      return this;
    }
    /* Takes effect on the next tick — safe to call mid-run. */
    setWpm(wpm) {
      this.wpm = Math.max(1, Number(wpm) || this.wpm);
      return this;
    }
  }

  window.FluencyShared = Object.assign(window.FluencyShared || {}, {
    GameTimer,
    Pacer
  });
})();
