<template>
  <div class="stopwatch-widget">
    <h2>Program Penghitung Waktu</h2>
    <p>{{ formatTime }}</p>
    <div>
      <button @click="startStopwatch" :disabled="isRunning">Tekan untuk Memulai</button>
      <button @click="stopStopwatch" :disabled="!isRunning">Tekan Untuk Berhenti</button>
      <button @click="resetStopwatch">Tekan untuk Mengulang</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isRunning: false,
      startTime: null,
      elapsedTime: 0,
    };
  },
  computed: {
    formatTime() {
      const milliseconds = this.elapsedTime % 1000;
      const seconds = Math.floor(this.elapsedTime / 1000) % 60;
      const minutes = Math.floor(this.elapsedTime / 60000) % 60;
      const hours = Math.floor(this.elapsedTime / 3600000);
      return `${hours}:${minutes.toString().padStart(2, "0")}:${seconds
        .toString()
        .padStart(2, "0")}:${milliseconds.toString().padStart(3, "0")}`;
    },
  },
  methods: {
    startStopwatch() {
      if (!this.isRunning) {
        this.isRunning = true;
        this.startTime = Date.now();
        this.timerInterval = setInterval(() => {
          this.elapsedTime = Date.now() - this.startTime;
        }, 10);
      }
    },
    stopStopwatch() {
      if (this.isRunning) {
        this.isRunning = false;
        clearInterval(this.timerInterval);
      }
    },
    resetStopwatch() {
      this.isRunning = false;
      clearInterval(this.timerInterval);
      this.elapsedTime = 0;
    },
  },
};
</script>

<style scoped>
.stopwatch-widget {
  border: none;
  padding: 20px;
  margin-bottom: 30px;
  
}
.stopwatch-widget h2 {
  color: #333;
  font-size: 34px;
  margin-bottom: 10px;
  color: burlywood;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  font-weight: bold;
}
.stopwatch-widget p {
  color: #666;
  font-size: 18px;
  margin-bottom: 10px;
}
.stopwatch-widget button {
  padding: 10px 20px;
  background-color: rgb(243, 180, 6);
  color: black;
  border: none;
  border-radius: 14px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin: 10px 20px;
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-weight: bold;
  text-shadow: 5px;
}
.stopwatch-widget button:hover {
  background-color: peru;
  transition: background-color 0.5s ease;
}
.stopwatch-widget button:disabled {
  background-color: #333;
  color: #999;
  cursor: not-allowed;
  text-decoration: line-through;
}


</style>
