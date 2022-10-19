<template>
  <div class="map-wrap">
    <GmapMap ref="mapRef" :center="center" :zoom="12" style="width:100%;  height: 400px;">
    </GmapMap>
  </div>
</template>
<script>
export default {
  data() {
  return {
      center: {lat: 45.508, lng: -73.587}
    }
  },
  mounted () {
    // At this point, the child GmapMap has been mounted, but
    // its map has not been initialized.
    // Therefore we need to write mapRef.$mapPromise.then(() => ...)

    // this.$refs.mapRef.$mapPromise.then((map) => {
    //   map.panTo({lat: 1.38, lng: 103.80})
    // })
    this.geolocate()
  },
  methods: {
    geolocate: function () {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
          // lat: 45.508,
          // lng: -73.587
        }
      })
    }
  }
}
</script>
<style>
.map-wrap{
  height: 200px;
}
</style>