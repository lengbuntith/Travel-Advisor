<template>
  <div><EventDetail :eventDetail="eventDetail" /></div>
</template>

<script>
export default {
  data() {
    return {
      event_id: '',
      eventDetail: '',
    }
  },
  //event data
  created() {
    this.event_id = this.$route.params.id
    this.$axios.get(`/event/get/${this.event_id}`).then((res) => {
      // console.log(res.data.data)
      this.eventDetail = res.data.data
    })
  },
}
</script>

<style lang="scss" scoped></style>
