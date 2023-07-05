<template>
  <div class="location-widget">
    <h2>Program Deteksi Lokasi Anda Berada</h2>
    <div v-if="latitude && longitude">
      <p>Masukkan Garis Lintang: {{ latitude }}</p>
      <p>Masukkan Garis Bujur: {{ longitude }}</p>
    </div>
    <div v-else>
      <p>Sedang Mencari Lokasi Anda...</p>
    </div>

    <div class="location-input">
      <label for="latitude">Silahkan Masukkan Garis Lintang:</label>
      <input type="text" id="latitude" v-model="inputLatitude" />
    </div>
    <div class="location-input">
      <label for="longitude">Silahkan Masukkan Garis Bujur:</label>
      <input type="text" id="longitude" v-model="inputLongitude" />
    </div>

    <button @click="fetchLocationDetails" class="tmbllokasi">Temukan Lokasi</button>

    <div v-if="foundLocation">
      <h3>Lokasi Detail</h3>
      <p>{{ foundLocation.components.country }}</p>
      <p>{{ foundLocation.components.city }}</p>
      <p>{{ foundLocation.components.street }}</p>
      <p>Kode Pos : {{ foundLocation.components.postcode }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      latitude: null,
      longitude: null,
      inputLatitude: "",
      inputLongitude: "",
      foundLocation: null,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getPosition);
    }
  },
  methods: {
    getPosition(position) {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;
    },
    async fetchLocationDetails() {
      try {
        const apiKey = "92591005a7b94008909d59a64b6d2a49";
        const latitude = this.inputLatitude || this.latitude;
        const longitude = this.inputLongitude || this.longitude;
        const apiUrl = `https://api.opencagedata.com/geocode/v1/json?q=${encodeURIComponent(
          latitude + "," + longitude
        )}&key=${apiKey}`;
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.results && data.results.length > 0) {
          const location = data.results[0];
          this.foundLocation = location;
          console.log("Location:", location);
          // Lakukan sesuatu dengan data lokasi yang ditemukan
        }
      } catch (error) {
        console.error("Error fetching location data:", error);
      }
    },
  },
};
</script>

<style scoped>
.location-widget {
  padding: 20px;
  margin-bottom: 20px;
  text-align: center;
  background-color: #fff;
}
.location-widget h2 {
  color:burlywood;
  font-size: 34px;
  margin-bottom: 20px;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;

}
.location-widget p {
  color: #444;
  font-style: italic;
}
.location-input {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  font-size: 30px;
}
.location-input label {
  display: block;
  margin-bottom: 5px;
  color: #333;
  font-size: 16px;
}
.location-input input {
  width: 200px;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}
.location-input button {
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.location-input button:hover {
  background-color: #45a049;
}
.location-input button:disabled {
  background-color: #ccc;
  color: #999;
  cursor: not-allowed;
}
.location-details {
  margin-top: 20px;
  text-align: left;
}
.location-details h3 {
  margin-bottom: 10px;
  color: #333;
  font-size: 18px;
}
.location-details p {
  margin: 5px 0;
  color: #666;
}
.error-message {
  color: red;
  margin-top: 10px;
}
.tmbllokasi{
  margin-top: 15px;
  width: 150px;
  height: 50px;
  background-color: #b6895b;
  border-radius: 6px;
  color: whitesmoke;
  font-weight: bold;
}
.tmbllokasi:hover{
  color: #444;
  text-decoration: underline;
  transition: color 0.3s ease;
}
</style>
