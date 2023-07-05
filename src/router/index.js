import { createRouter, createWebHistory } from 'vue-router';

import WeatherWidget from '../components/WeatherWidget.vue';
import LocationWidget from '../components/LocationWidget.vue';
import StopwatchWidget from '../components/StopwatchWidget.vue';
import TicTacToeWidget from '../components/TicTacToeWidget.vue';


const routes = [
  { path: '/', component: WeatherWidget },
  { path: '/location', component: LocationWidget },
  { path: '/stopwatch', component: StopwatchWidget },
  { path: '/tictactoe', component: TicTacToeWidget },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;