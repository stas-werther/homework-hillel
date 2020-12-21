const runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        let _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function (element) {
                element();
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
  }
  // Каждые 2 секунды Hello world

  runner.add(function(){
    console.log('Hello world!!!');
  });

  runner.start(2000);
  