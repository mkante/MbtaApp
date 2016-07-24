<template>
  <div schedule-item >

    <div class="left-w">
      <div class="label">Destination</div>
      <div class="name">{{destination}}</div>

      <div class="trck-w">
        Track <span class="trck">{{track}}</span>
      </div>
    </div>

    <div class="right-w">
      <div class="col1">
        <div class="label">Departs</div>
        <div class="time">{{departs}}</div>
      </div>

      <div class="arrow fa fa-arrow-right"></div>

      <div class="col2">
        <div class="label">Arrives</div>
        <div class="time">{{arrives}}</div>

        <div class="ltnslbl label">Lateness</div>
        <div class="time latnss">{{lateness}}</div>
      </div>

      <div class="col3">
        <div class="label">Status</div>
        <div class="status">{{status}}</div>

        <div class="dtlBtn">trip</div>
      </div>

    </div>

  </div>
</template>

<script>
export default {

  props: {
    destination: {
      default: 'Dover'
    },
    track: {
      default: '0'
    },
    departs: {
      default: '11:56 am'
    },
    arrives: {
      default: '12:00 am'
    },
    lateness: {
      default: '30 sec'
    },
    status: {
      default: 'On time'
    }
  }
}
</script>
