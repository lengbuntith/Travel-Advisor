<template>
  <BaseLayout>
    <Describe :placeDetail="placeDetail"/>
    <DetailSlide :images="placeDetail.images" />
    <MapComponent v-if="placeDetail" :placeDetail="placeDetail"/>    
    <Contribute style="z-index:1000"/>
    <Comment/>
  </BaseLayout>
</template>

<script>
export default {

  data() {
    return {
     placeDetail: ""
      }
    },
   created(){
     let id = this.$route.params.id
     console.log(id);
    this.$axios.get("/place/"+id)
    .then((res)=>{
      console.log(res)
      this.placeDetail = res.data.data;
    })
   }
}
</script>

<style lang="scss" scoped>
</style>
