// Определите объект автомобиля
const car = {
    manufacturer: "Toyota",
    model: "Camry",
    year: 2022,
    averageSpeed: 60,
    // Функция для отображения информации об автомобиле
    displayCarInfo() {
      console.log(`Manufacturer: ${this.manufacturer}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
      console.log(`Average Speed: ${this.averageSpeed} km/h`);
    },
      // Функция для расчета времени, необходимого для преодоления заданного расстояния
    calculateTravelTime(distance) {
      if (distance <= 0) {
        console.log("Неверное расстояние.");
        return;
      }
  
      // Вычисляем время в часах
      let travelTime = distance / this.averageSpeed;
  
      // Вычисляем количество необходимых перерывов
      let numBreaks = Math.floor(travelTime / 4);
  
       // Добавьте перерывы к времени поездки
      travelTime += numBreaks;
  
      console.log(`Time needed to travel ${distance} km: ${travelTime.toFixed(1)} hours`);
    }
  };
  
  // Тестируем объект и функции автомобиля
  car.displayCarInfo();
  car.calculateTravelTime(500);