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
      let date = new Date()

      let year = date.getFullYear()

      let month = `0${date.getMonth()}`

      let day = `0${date.getDate()}`

      let hour = `0${date.getHours()}`

      let min = `0${date.getMinutes()}`;

      let sec = `0${date.getSeconds()}`;

      let output = this.format
        .replace(/Y{1,4}/, year)
        .replace(/M{1,2}/, month.slice(-2))
        .replace(/D{1,2}/, day.slice(-2))
        .replace(/h{1,2}/, hour.slice(-2))
        .replace(/m{1,2}/, min.slice(-2))
        .replace(/s{1,2}/, sec.slice(-2));

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
