<template>
  <BaseLayout>
    <center><h3>TOP 3 CITIES TOURIST MOST VISITED</h3></center>
    <div class="my-5">
      <span class="ml-8">Tourism</span> is traditionally one of the key pillars
      of Cambodia’s economy and most key regional hubs have tourism development
      and strategic plans in place, or in the process of being drawn up. These
      include the identification of tourist attractions, improving
      infrastructure and access etc especially with the effects of COVID-19 on
      the industry and the economic impact.
    </div>
    <div v-for="(trend, index) in trendings" :key="trend._id">
      <h4>{{ index + 1 + '. ' + trend.city.name }}</h4>
      <div class="d-flex justify-center mt-2 cover-image">
        <v-img
          style="border-radius: 8px"
          alt=""
          v-if="trend.city"
          :src="trend.city.image"
        ></v-img>
      </div>
      <div>
        <v-card-text>
          <div>
            <p style="font-weight: 700" class="mt-1 mt-lg-4">City info:</p>
            {{ trend.describe }}
            <div class="d-flex align-center">
              <p style="font-weight: 700" class="mt-1 mt-lg-4">Detail:</p>
              <nuxt-link
                v-if="trend.city"
                :to="`/attractive place/${trend.city._id}`"
                class="ml-4"
              >
                {{ trend.city.name }}
              </nuxt-link>
            </div>
          </div>
        </v-card-text>
      </div>
    </div>
  </BaseLayout>
</template>
<script>
export default {
  data() {
    return {
      trendings: '',
    }
  },
  methods: {
    //get trending place
    getTrend() {
      this.$axios.get('/trending/get/all').then((res) => {
        this.trendings = res.data.data.docs
        console.log(this.trendings)
      })
    },
  },
  created() {
    this.getTrend()
  },
}
</script>
<style scoped>
.cover-image {
  max-height: 480px;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
