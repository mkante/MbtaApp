<template>
  <div home-comp>
    <div class="top-w">
      <img src="/static/images/mbta-logo-black.png" class="logo"/>
    </div>

    <div class="city-w">Boston</div>
    <div class="bottom-w">
      <div class="text">Select a station</div>

      <div class="btn" v-on:click="gotoStation('place-sstat')">South station</div>
      <div class="btn" v-on:click="gotoStation('place-north')">North station</div>
    </div>
  </div>
</template>

<script>

  import LogoComp from 'comp/Logo.vue'

  export default {

    methods: {
      gotoStation: function (id) {
        console.log('Station: ' + id)

        this.$route.router.go({
          name: 'station',
          params: {
            id: id
          }
        })
      }
    },

    components: {
      LogoComp
    }
  }
</script>
