<template>
  <div class="weather-widget">
    <h2 class="widget-title">Program Mencari Cuaca Di Lokasi Tertentu</h2>
    <div class="location-input">
      <label for="location" class="jdlbesar">Masukkan Lokasi Yang diinginkan:<br></label>
      <input type="text" id="location" v-model="location" /><br>
      <button @click="fetchWeatherData" class="tmblcuaca">Dapatkan Cuaca</button>
    </div>
    <div v-if="weatherData" class="weather-data">
      <p class="location">Location: {{ weatherData.name }}</p>
      <p v-if="weatherData.main" class="temperature">
        Temperature: {{ weatherData.main.temp }}°C
      </p>
      <p v-if="weatherData.weather" class="description">
        Description: {{ weatherData.weather[0].description }}
      </p>
    </div>
    <p class="elsep" v-else>Sedang Mencari Kondisi Cuaca Saat Ini...</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      location: "",
      weatherData: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      try {
        const apiKey = "b7bfca7b27a3485144fea086c50d09dc";
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        this.weatherData = data;
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    },
  },
};
</script>

<style scoped>
.weather-widget {
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
}
.widget-title {
  margin-top: 0;
  color: #b6895b;
  font-weight: bold;
  text-decoration: underline;
  font-style: italic;
  font-size: 35px;
}
.location-input {
  margin-bottom: 10px;
  font-style: inherit;
}
.weather-data {
  margin-top: 10px;
}
.location {
  font-size: 18px;
  font-weight: bold;
  margin-top: 35px;
}
.temperature {
  font-size: 24px;
  color: #ff5722;
}
.description {
  font-size: 16px;
}
.elsep{
  font-style: italic;
  font-size: 15px;
  color: #666;
}
.tmblcuaca{
  margin-top: 20px;
  border-radius: 6px;
  background-color: #666;
  color: whitesmoke;
  font-style: italic;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  height: 50px;
  width: 150px;
}
#location{
  margin-top: 15px;
  width: 250px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  
}
</style>
