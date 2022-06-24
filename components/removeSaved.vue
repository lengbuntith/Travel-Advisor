<template>
  <v-btn icon color="red" @click="removeSaved(saveId)" :loading="loading">
    <v-icon>mdi-delete</v-icon>
  </v-btn>
</template>

<script>
export default {
  props: ['saveId'],
  data() {
    return {
      loading: false,
    }
  },
  methods: {
    //remove save
    removeSaved(id) {
      this.loading = true
      this.$axios
        .post('/saved/add', {
          placeID: id,
        })
        .then((res) => {
          this.$nuxt.$emit('getSave')
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
    },
  },
}
</script>

<style lang="scss" scoped></style>
