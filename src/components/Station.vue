<template>

  <div station-comp>
    <div class="header-w">
      <div class="menu">
        <div
          v-on:click="gotoHome()"
          class="icon fa fa-long-arrow-left"></div>
        <div class="logo-w">
          <img src="/static/images/mbta-logo-white.png" />
          <div class="text">Boston</div>
        </div>
      </div>

      <div class="sttion-w">
        <div class="text">Departure</div>
        <div class="sttion-name">{{stationName}}</div>
      </div>

    </div>

    <div v-show="$loadingAsyncData">
      <div class="loading-w">Loading ...</div>
    </div>

    <div class="schdl-lst" v-show="!$loadingAsyncData">
      <schedule-comp v-for="item in items"
                     v-bind:destination="item.destination"
                     v-bind:track="item.track"
                     v-bind:departs="item.departs"
                     v-bind:arrives="item.arrives"
                     v-bind:lateness="item.lateness"
                     v-bind:status="item.status" ></schedule-comp>

      <div class="empty" v-if="isEmpty" >No data</div>
    </div>

  </div>
</template>

<script>

  import _ from 'underscore'
  import DepartureModel from 'class/model/Departure.js'
  import ScheduleItem from 'comp/Schedule.vue'

  export default {
    data: function () {
      return {
        items: [],
        stationName: 'South station'
      }
    },

    asyncData: function (resolve, reject) {

      console.log(this.$route.params)
      var stationID = this.$route.params.id
      var self = this

      if (stationID == 'place-north') {
        this.$data.stationName = 'North station'
      }
      else {
        this.$data.stationName = 'South station'
      }

      DepartureModel
        .request({ id: stationID })
        .get()
        .then(function (items) {

          self.$data.items = items
          resolve()
        })
        .fail(function () {
          console.log('Oops something went wrong')
        })
    },

    methods: {

      gotoHome: function () {
        this.$route.router.go({ name: 'home' })
      }
    },

    computed: {
      isEmpty: function () {
        return (this.$data.items.length === 0)
      }
    },

    components: {
      'schedule-comp': ScheduleItem
    }
  }
</script>
