<template>
  <div>
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center green--text">{{ text }}</div>
    </v-snackbar>
    <v-btn icon color="red" @click="deleteEvent(eventId)" :loading="loading">
      <v-icon small>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['eventId'],
  data() {
    return {
      loading: false,
      snackbar: false,
      text: '',
    }
  },
  methods: {
    deleteEvent(eventId) {
      this.loading = true
      this.$axios.delete(`/event/delete/${eventId}`).then((res) => {
        //call bus parent
        // console.log(res.data.data)
        this.text = 'Delete succesful'
        this.loading = false
        this.snackbar = true
        this.$nuxt.$emit('getEvent')
      })
    },
  },
}
</script>

<style lang="scss" scoped></style>
