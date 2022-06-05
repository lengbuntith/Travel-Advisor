<template>
  <div id="map-wrap" style="height: 400px" class="mt-13">
    <client-only>
      <l-map :zoom="13" :center="[placeDetail.lat, placeDetail.lng]">
        <l-tile-layer
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        ></l-tile-layer>
        
        <l-marker
          v-for="marker in markers"
          :key="marker._id"
          :lat-lng="marker.position"
        >
         
          <!-- <l-tooltip :options="{ permanent: true, interactive: true }">
              I am a tooltip
          </l-tooltip> -->
          <l-tooltip :content="marker.title" />
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
      markers: [
        {
          _id: 1,
          position: { lat: 13.441249243435095, lng: 103.85882806065511 },
          title: 'ប្រាសាទអង្គរធំ-Angkor Thom Temple​',
          icon: 'https://cdn0.iconfinder.com/data/icons/world-landmarks-cona-line-1/128/landmarks_buildings_architecture_Angkor_Wat_Cambodia--512.png',
        },
        {
          _id: 2,
          position: { lat: 13.412667578508499, lng: 103.86701788369649 },
          title: 'ប្រាសាទអង្គរវត្ត-Angkor Wat Temple',
          icon: 'https://cdn0.iconfinder.com/data/icons/world-landmarks-cona-line-1/128/landmarks_buildings_architecture_Angkor_Wat_Cambodia--512.png',
        },
        {
          _id: 3,
          position: { lat: 13.599284388017495, lng: 103.96306974136994 },
          title: 'ប្រាសាទ​បន្ទាយស្រី-Banteay Srei Temple',
          icon: 'https://cdn0.iconfinder.com/data/icons/world-landmarks-cona-line-1/128/landmarks_buildings_architecture_Angkor_Wat_Cambodia--512.png',
        },
        {
          _id: 4,
          position: { lat: 13.484370314691514, lng: 103.87326485957759 },
          title: 'ប្រាសាទ​បន្ទាយស្រី-Banteay Srei Temple',
          icon: 'https://cdn0.iconfinder.com/data/icons/world-landmarks-cona-line-1/128/landmarks_buildings_architecture_Angkor_Wat_Cambodia--512.png',
        },
      ],
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
