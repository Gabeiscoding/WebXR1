AFRAME.registerComponent('color-cycle', {
  schema: {default: 0},
  init: function () {
    this.colors = ['red', 'blue', 'green', 'yellow'];
    this.current = 0;
    this.el.setAttribute('color', this.colors[this.current]);
    this.lastChange = Date.now();
    this.interval = 500; // ms between color changes
  },
  tick: function () {
    if (Date.now() - this.lastChange > this.interval) {
      this.current = (this.current + 1) % this.colors.length;
      this.el.setAttribute('color', this.colors[this.current]);
      this.lastChange = Date.now();
    }
  }
});