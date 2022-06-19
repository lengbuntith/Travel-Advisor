<template>
  <div>
    <AttractivePlaceCover :covers="city_cover" />
    <BaseLayout style="position: sticky; top: 0; z-index: 998">
      <v-row class="mt-5">
        <v-col cols="12" md="6">
          <AttractivePlaceList :places="placepercitys" :city="city_cover" />
        </v-col>
        <v-col cols="12" md="6">
          <v-card outlined tile color="#fafafa">
            <!-- <AttractivePlaceLocation :places="place" />
             -->
            <div style="height: 720px">
              <div id="map-wrap" style="height: 470px">
                <client-only>
                  <l-map :zoom="9" :center="[lat, lng]">
                    <l-tile-layer
                      url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    ></l-tile-layer>
                    <l-marker
                      v-for="marker in placepercitys"
                      :key="marker._id"
                      :lat-lng="[marker.lat, marker.lng]"
                    >
                      <l-tooltip :content="marker.title" />
                    </l-marker>
                  </l-map>
                </client-only>
              </div>

              <div>
                <h3 class="ma-2">Details</h3>
                <ul>
                  <li>Address: {{ city_cover.name }}, Cambodia</li>
                </ul>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </BaseLayout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      placepercitys: '',
      place_id: '',
      city_cover: '',
      lat: '',
      lng: '',
    }
  },
  methods: {
    //get places per city
    getPlace() {
      this.place_id = this.$route.params.id
      // console.log(this.place_id)
      this.$axios
        .get(
          `/place/all?item_per_page=200&most_comment=true&select=images,story,averageRating,city,lat,lng&city_id=${this.place_id}`
        )
        .then((res) => {
          this.placepercitys = res.data.data.docs
          // console.log(this.placepercitys)
        })
    },
    getCity() {
      this.$axios.get(`/city/detail/${this.place_id}`).then((res) => {
        this.city_cover = res.data.data
        console.log('city', this.city_cover)
        // console.log(this.city_cover.lat)
        this.lat = this.city_cover.lat
        this.lng = this.city_cover.lng
        // console.log(this.lat)
      })
    },
  },
  created() {
    this.getPlace()
    this.getCity()
  },
}
</script>

<style lang="scss" scoped></style>
