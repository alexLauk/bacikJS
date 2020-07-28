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
    }

    display() {
          const date = new Date()

          const obj = {
            year : date.getFullYear(),
            month : (`0${date.getMonth()}`).slice(-2),
            day : (`0${date.getDate()}`).slice(-2),
            hour : (`0${date.getHours()}`).slice(-2),
            min : (`0${date.getMinutes()}`).slice(-2),
            sec : (`0${date.getSeconds()}`).slice(-2)
          }

          const output = Object.values(obj).reduce((str, current)=> str.replace(/([Y]{1,4})|([MD]{1,2})|([hms]{1,2})/, current), this.format)

          console.log(output);
      }

    formatTo(format) {
      this.format = format
      this.display()
    }

    stop() {
      clearInterval(this.timer);
    }

    run() {
      this.display();
      this.timer = setInterval(() => this.display(), 1000);
    }
}

// use class
let clock = new Clock();
clock.run();
clock.stop();
