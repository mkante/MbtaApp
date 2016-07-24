/* eslint-disable */
import Vue from 'vue';
import App from './App.vue'
import VueRouter from 'vue-router'
import HomeComp from 'comp/Home.vue';
import StationComp from 'comp/Station.vue';
import VueAsyncData from 'vue-async-data' ;
import $ from 'jquery'

import 'assets/styles.css'

Vue.use(VueRouter);
Vue.use(VueAsyncData);

// A transition
Vue.transition('fade-slow', {

  enter: function (el) {
    $(el).hide();
    $(el).fadeIn(800);
  },
  leave: function (el) {
    //el.textContent = 'leave'
  },
});

const router = new VueRouter({
  transitionOnLoad: true
})

router.map({
  '/': {
    name: 'home',
    component: HomeComp
  },

  'station/:id': {
    name: "station",
    component: StationComp,
  }
})

router.start(App, '#app')

