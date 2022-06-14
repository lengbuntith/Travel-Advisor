<template>
  <div class="text-center">
    <h1 class="card-header">Find The Perfect Place</h1>
    <h2 class="card-header">
      A list of the top 75 Best Tourist Places to See in Cambodia for a perfect
      holiday or a trip!
    </h2>

    <div class="card-body">
      <ResponsiveCard :allPlaces="allPlaces" />
    </div>
    <div class="text-center mt-7" @click="pageNum">
      <v-container class="max-width">
        <v-pagination
          v-model="page"
          :length="totalPage"
          :total-visible="7"
          @input="handlerPage"
        ></v-pagination>
      </v-container>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      page: 1,
      totalPage: 0,
      allPlaces: [],
    }
  },
  methods: {
    //pagination
    pageNum() {
      this.$vuetify.goTo(0)
    },
    //paginate page num
    handlerPage(page) {
      this.$router.push(`/perfect-places?page=${page}`)
    },

    //get place data from api
    getItems(page) {
      this.$axios
        .get(`/place/all?page=${page}&select=story,averageRating,city`)
        .then((res) => {
          // console.log('get place', res.data.data)
          this.allPlaces = res.data.data.docs
          this.totalPage = res.data.data.totalPages
        })
    },
  },
  watch: {
    '$route.query': {
      handler(query) {
        console.log(query)
        let page = query.page
        if (page) this.page = parseInt(page)

        console.log(page)
        this.getItems(page)
      },
      immediate: true,
      deep: true,
    },
  },
}
</script>

<style lang="scss" scoped></style>
