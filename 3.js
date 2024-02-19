// Определите объект времени
const time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
    // Функция для отображения времени
  displayTime() {
    console.log(`${this.hours.toString().padStart(2, "0")}:${this.minutes.toString().padStart(2, "0")}:${this.seconds.toString().padStart(2, "0")}`);
  },
   // Функция для добавления секунд к времени
  addSeconds(sec) {
    if (sec < 0) {
      console.log("Invalid input.");
      return;
    }

    const secInMinute = 60;
    const minInHour = 60;

    this.seconds += sec;
    while (this.seconds >= secInMinute) {
      this.seconds -= secInMinute;
      this.minutes++;
      while (this.minutes >= minInHour) {
        this.minutes -= minInHour;
        this.hours++;
      }
    }
  },
    // Функция для добавления минут к времени
  addMinutes(min) {
    if (min < 0) {
      console.log("Invalid input.");
      return;
    }

    this.minutes += min;
    const minInHour = 60;
    while (this.minutes >= minInHour) {
      this.minutes -= minInHour;
      this.hours++;
    }
  },
  // Функция для добавления часов к времени
  addHours(hours) {
    if (hours < 0) {
      console.log("Invalid input.");
      return;
    }

    this.hours += hours;
  }
};

// Тестируем объект времени и функции
time.displayTime();
time.addSeconds(30);
time.displayTime();
time.addMinutes(30);
time.displayTime();
time.addHours(4);
time.displayTime();