<template>
  <div>
    <v-parallax dark height="400" jumbotron :src="covers.image">
      <v-row class="bg-color" align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1
            class="white--text text-h1 font-weight-bold mb-4 text-h5 text-sm-h3 text-md-h2 text-lg-h1"
          >
            {{ covers.name }}
          </h1>
          <!-- <h4 class="subheading">
          Build your application today!
        </h4> -->
        </v-col>
      </v-row>
    </v-parallax>
  </div>
</template>

<script>
export default {
  props: ['covers'],
  data() {
    return {
      image: '',
    }
  },
}
</script>
<style scoped>
.bg-color {
  background-color: rgba(0, 0, 0, 0.5);
}
img {
  height: 100%;
}
</style>
