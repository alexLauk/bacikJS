// реализовать класс Clock который принимает два параметра
// cигнатура создания может быть такой
// Каждую секунду показывает время в указанном формате (иметь формат по умолчанию)
// Для запуска таймера использовать setInterval
// Предусмотреть возможность остановки таймера
//let clock = new Clock(new Date, 'hh/mm/ss');

//clock.run();
// '18:30:55'
// '18:30:56'
// ...

//clock.changeFormatTo('hh/mm');

// '18:30'

//clock.changeFormatTo('yyyy/mm/dd')

class Clock {
    constructor(format = 'DD.MM.YYYY hh:mm:ss') {
      this.format = format
      this.zero = '0'
      this.timer = null
      this.output = null
    }

    get display() {
      const date = new Date()

      const arr = [
        {value: date.getFullYear(), reg: /Y{1,4}/},
        {value: (this.zero + date.getMonth()).slice(-2), reg: /M{1,2}/},
        {value: (this.zero + date.getDate()).slice(-2), reg: /D{1,2}/},
        {value: date.getHours(), reg: /h{1,2}/},
        {value: (this.zero + date.getMinutes()).slice(-2), reg: /m{1,2}/},
        {value: (this.zero + date.getSeconds()).slice(-2), reg: /s{1,2}/}
    ]

      this.output = arr.reduce((str, item, idx) => str.replace(arr[idx].reg, item.value), this.format)

      return console.log(this.output);
    }

    get stop() {
      return clearInterval(this.timer);
    }

    get run() {
        this.timer = setInterval(() => this.display, 1000);
    }

    set run(format) {
      this.format = format
      this.run
    }

    get formatTo() {
    }

    set formatTo(format) {
      this.format = format
    }

  }

// use class
let clock = new Clock();
clock.run;
clock.stop;
