<template>
  <div>
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center green--text">{{ text }}</div>
    </v-snackbar>
    <v-btn
      icon
      color="red"
      @click="deleteSuggestion(suggestionId)"
      :loading="loading"
    >
      <v-icon small>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['suggestionId'],
  data() {
    return {
      loading: false,
      text: '',
      snackbar: false,
    }
  },
  methods: {
    async deleteSuggestion(suggestionId) {
      this.loading = true
      const res = await this.$axios.delete(`/suggestion/delete/${suggestionId}`)
      this.text = 'Delete comment successful'
      this.snackbar = true

      this.loading = false
      this.$nuxt.$emit('getSuggestion')
    },
  },
}
</script>

<style lang="scss" scoped></style>
