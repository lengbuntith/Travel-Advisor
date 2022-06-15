<template>
  <BaseLayout>
    <Describe :placeDetail="placeDetail" />
    <DetailSlide :images="placeDetail.images" />
    <MapComponent v-if="placeDetail" :placeDetail="placeDetail" />
    <!-- <Contribute  />  no use cuz include it with comment component-->
    <Comment style="z-index: 1000" :placeId="id" />
  </BaseLayout>
</template>

<script>
export default {
  data() {
    return {
      placeDetail: '',
      id: '',
    }
  },
  watch: {
    '$route.params': {
      handler(params) {
        // console.log('query', params)
        this.id = params.id
        // console.log('id: ', this.id)
        // console.log(id)
        this.$axios.get('/place/' + this.id).then((res) => {
          console.log('love', res)
          this.placeDetail = res.data.data
        })
      },
      immediate: true,
      deep: true,
    },
  },
  // created() {
  //   this.id = this.$route.params.id
  //   // console.log(id)
  //   this.$axios.get('/place/' + this.id).then((res) => {
  //     console.log(res)
  //     this.placeDetail = res.data.data
  //   })
  // },
}
</script>

<style lang="scss" scoped></style>
