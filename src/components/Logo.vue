<template>
  <div logo-comp>
    <svg
         data-name="Layer 1"
         xmlns="http://www.w3.org/2000/svg"
         v-bind:width="width" v-bind:height="height"
         viewBox="0 0 500 500"><title>mbta-logo</title>
      <path
        v-bind:fill="color"
        d="M233,7h42c7.53,1.15,15.09,2.14,22.59,3.49,46.69,8.43,87.89,28.35,123,60.23q67.24,61,80.41,151.09c1.31,9,2,18.12,3,27.19v16c-0.28,1.94-.61,3.88-0.83,5.83-1.14,10.09-1.73,20.27-3.44,30.25-17.14,99.66-95.87,180.84-194.8,201-9.9,2-19.95,3.32-29.93,5H233a15,15,0,0,0-2.79-.83c-48.66-4.78-92.36-22.11-130.57-52.6Q24.27,393.42,7.9,298.14C6,287.19,5.27,276.05,4,265V249c0.29-2.29.62-4.57,0.88-6.87,1.14-9.92,1.69-19.94,3.48-29.74,18.46-101.09,95-179.53,195.69-200.62C213.61,9.77,223.35,8.57,233,7Zm20.89,21.12c-126.62,0-229.53,102.74-229.39,229S127.29,485.82,253.6,485.88c127,0.06,230.05-102.58,229.9-229S380.6,28.1,253.89,28.12Z"
        transform="translate(-4 -7)"/>
      <path
        v-bind:fill="color"
        d="M418.84,135v75.4H294.14V414.2H209.93V210.68H89.27V135H418.84Z"
        transform="translate(-4 -7)"></svg>

  </div>
</template>

<script>

  export default {
    props: {
      color: {
        default: '#1000'
      },
      scale: {
        default: 0.5
      }
    },

    computed: {
      width: function () {
        var val = 145 * this.scale
        return val + 'px'
      },

      heigh: function () {
        var val = 80 * this.scale
        return val + 'px'
      }
    }
  }
</script>
