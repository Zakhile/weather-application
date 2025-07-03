let weather = [
    { name: "paris", temp: 19.7, humidity: 80 },
    { name: "tokyo", temp: 17.3, humidity: 50 },
    { name: "lisbon", temp: 30.2, humidity: 20 },
    { name: "san francisco", temp: 20.9, humidity: 100 },
    { name: "oslo", temp: -5, humidity: 20 },
  ];
  
  // write your code here
  
  function weatherPrompt() {
    let promptContinue = true;
  
    while (promptContinue) {
      let city = window.prompt("Which city are you from?").toLowerCase();
  
      if (city === "exit") {
        promptContinue = false;
        break;
      }
  
      let cityWeather = weather.find((w) => w.name === city);
      if (cityWeather) {
        alert(
          Math.round(cityWeather.temp).toString() +
            "°C in " +
            cityWeather.name +
            " with a humidity of " +
            cityWeather.humidity +
            "%"
        );
        promptContinue = false;
      } else {
        alert(
          "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+city"
        );
      }
    }
  }
  
  weatherPrompt();
  