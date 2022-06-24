<template>
  <div
    :disabled="true"
    class="pa-4 text-no-wrap rounded-pill d-flex justify-between align-center"
  >
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center" :class="colorMessage">{{ text }}</div>
    </v-snackbar>
    <v-text-field
      v-model="message"
      append-outer-icon="mdi-send"
      filled
      clear-icon="mdi-close-circle"
      clearable
      label="Your idea ?"
      type="text"
      :loading="isLoading"
      @click:append="toggleMarker"
      @click:append-outer="sendMessage"
      @click:prepend="changeIcon"
      @click:clear="clearMessage"
      @keyup.enter="sendMessage()"
      dense
    ></v-text-field>
  </div>
</template>
<!--      :prepend-icon="icon"
-->
<script>
export default {
  props: ['suggestionId'],
  data: () => ({
    password: 'Password',
    show: false,
    message: '',
    marker: true,
    iconIndex: 0,
    isLoading: false,

    //snackbar
    snackbar: false,
    text: '',
    colorMessage: ' green--text',
    icons: [
      'mdi-emoticon',
      'mdi-emoticon-cool',
      'mdi-emoticon-dead',
      'mdi-emoticon-excited',
      'mdi-emoticon-happy',
      'mdi-emoticon-neutral',
      'mdi-emoticon-sad',
      'mdi-emoticon-tongue',
    ],
  }),

  computed: {
    icon() {
      return this.icons[this.iconIndex]
    },
  },

  methods: {
    toggleMarker() {
      this.marker = !this.marker
    },
    //post idea
    sendMessage() {
      this.isLoading = true
      this.$axios
        .post('/commentsuggestion/create', {
          comment: this.message,
          suggestionID: this.suggestionId,
        })
        .then((res) => {
          this.$nuxt.$emit('getSuggestion')

          setTimeout(() => {
            this.isLoading = false
            this.text = "You've commented"
            this.snackbar = true
          }, 2000)
        })
        .catch((error) => {
          console.log(error.response.data)
          this.text = error.response.data.error
          this.colorMessage = ' red--text'

          this.isLoading = false
          this.snackbar = true
        })
      this.resetIcon()
      this.clearMessage()
    },
    clearMessage() {
      this.message = ''
    },
    resetIcon() {
      this.iconIndex = 0
    },
    changeIcon() {
      this.iconIndex === this.icons.length - 1
        ? (this.iconIndex = 0)
        : this.iconIndex++
    },
  },
}
</script>
