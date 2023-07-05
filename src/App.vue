<template>
  <div id="app">
    <header>
      <h2 class="judulutama">Dhiki's <span>Widget</span></h2>
      <nav>
        <ul>
          <li><router-link to="/">Deteksi Cuaca</router-link></li>
          <li><router-link to="/location">Mencari Lokasi</router-link></li>
          <li><router-link to="/stopwatch">Penghitung Waktu</router-link></li>
          <li><router-link to="/tictactoe">Game TicTacToe</router-link></li>
        </ul>
      </nav>
    </header>
    <h5 class="copyright">Copyright @MuhammadDhikiWahyudi<br> NPM 213510549</h5>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
#app {
  text-align: center;
}
header {
  background: #777;
  padding: 20px;
  font-family:Verdana, Geneva, Tahoma, sans-serif;
  font-size: 25px;
  border-radius: 8px;
}
nav{
  display: inline-block;
}
nav ul {
  list-style: none;
  margin-top: -25px;
  padding: 0;
  
}
nav li {
  display: inline-block;
  margin-right: 10px;
}
nav a {
  color: whitesmoke;
  text-decoration: none;
  padding: 5px 10px;
}
nav a:hover {
  text-decoration: underline;
  color: #b6895b;
  transition: color 0.5s ease;
  font-style: italic;
}
.judulutama{
  color: burlywood;
  text-align: left;
  font-size: 20px;
  margin-top: 35px;
  margin-left: 10px;
}
.judulutama span{
  color: #b6895b;
  font-style: italic;
}
.copyright{
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 10px 0;
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    font-size: 20px;
    font-style: italic;
}
</style>
