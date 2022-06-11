<template>
  <div id="map-wrap" style="height: 400px" class="mt-13">
    <client-only>
      <l-map :zoom="13" :center="[placeDetail.lat, placeDetail.lng]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        
        <l-marker
          :lat-lng="[placeDetail.lat, placeDetail.lng]"
        >
         
          <!-- <l-tooltip :options="{ permanent: true, interactive: true }">
              I am a tooltip
          </l-tooltip> -->
          <l-tooltip :content="placeDetail.title" />
        </l-marker>
      </l-map>
    </client-only>
  </div>
</template>

<script>
export default {
  props: ['placeDetail'],
  data() {
    return {
      iconSize: 32,
     
      // center: {
      //   lat: 14.420553861323805, 
      //   lng: 104.6554333569159
      // },
     
    }
  },
  computed: {
    dynamicSize() {
      return [this.iconSize, this.iconSize * 1.15]
    },
    dynamicAnchor() {
      return [this.iconSize / 2, this.iconSize * 1.15]
    },
  },
  methods: {
  },
}
</script>

<style lang="scss" scoped></style>
