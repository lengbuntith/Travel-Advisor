<template>
  <v-container>
    <v-btn @click="createItem">create new item</v-btn>

    <ul>
      <li v-for="city in allCities" :key="city._id">
        {{ city.name }}
      </li>
    </ul>

    <v-row>
      <v-col
        v-for="product in allProducts"
        :key="product._id"
        cols="12"
        xs="12"
        sm="6"
        md="4"
        lg="3"
        xl="2"
      >
        <v-card class="pa-2" outlined tile>
          <template>
            <v-card class="mx-auto" max-width="344">
              <v-img :src="product.thumbnail" height="200px"></v-img>

              <v-card-title> {{ product.title }} </v-card-title>

              <v-card-subtitle align="left" class="d-flex align-center">
                Rating:
                <v-rating
                  v-model="rating"
                  size="15"
                  readonly
                  half-increments
                  icon-label="custom icon label text {0} of {1}"
                ></v-rating>
              </v-card-subtitle>

              <p class="text-justify pa-2 line-clamp">
                {{ product.description }}
              </p>
              <nuxt-link :to="product._id"> View detail </nuxt-link>
            </v-card>
          </template></v-card
        ></v-col
      ></v-row
    >
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      rating: 3.5,
      allProducts: [],
      allCities: [],
      title: 'Angkor Thom',
    }
  },

  created() {
    this.getItems()
  },

  methods: {
    getItems() {
      //get data from api
      this.$axios.get('/item/all').then((res) => {
        console.log('get item', res.data.data)
        this.allProducts = res.data.data

        this.getCity()
      })
    },

    getCity() {
      this.$axios
        .get('/city/all')
        .then((res) => {
          console.log('get city', res.data)
          this.allCities = res.data.data
        })
        .catch((err) => {
          console.log('get city error', err)
        })
    },

    createItem() {
      this.$axios
        .post('/item/create', {
          title: this.title,
          thumbnail:
            'https://res.cloudinary.com/dik7npkoo/image/upload/v1652760012/fdch8o2yrgpphbmbtaf7.jpg',
          images: [
            'https://res.cloudinary.com/dik7npkoo/image/upload/v1652760012/fdch8o2yrgpphbmbtaf7.jpg',
          ],
          description:
            'angkor wat is temple in siem reap city part of cambodia',
        })
        .then((res) => {
          console.log('create item', res.data)
        })
        .catch((err) => {
          console.log('create item', err)
        })
    },
  },
}
</script>

<style scoped>
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
