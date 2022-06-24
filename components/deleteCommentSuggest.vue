<template>
  <div>
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center green--text">{{ text }}</div>
    </v-snackbar>
    <v-btn
      icon
      color="red"
      @click="deleteComment(commentId)"
      :loading="loading"
    >
      <v-icon>mdi-delete</v-icon>
    </v-btn>
  </div>
</template>

<script>
export default {
  props: ['commentId'],
  data() {
    return {
      colorMessage: '',
      loading: false,
      text: '',
      snackbar: false,
    }
  },
  methods: {
    async deleteComment(comment_id) {
      this.loading = true
      const res = await this.$axios.delete(
        `/commentsuggestion/delete/${comment_id}`
      )
      this.$nuxt.$emit('getSuggestionById')

      setTimeout(() => {
        //   this.getSuggestionById(this.suggestionId, 1)
        this.colorMessage = ' green--text'
        this.loading = false
        this.text = 'Delete comment successful'
        this.snackbar = true
      }, 2000)
    },
  },
}
</script>

<style lang="scss" scoped></style>
