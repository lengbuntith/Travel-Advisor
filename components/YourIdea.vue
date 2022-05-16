<template>
    <div 
                    class="pa-4 text-no-wrap rounded-pill d-flex justify-between align-center" 
                    height="45">
                        <v-text-field
                        v-model="message"
                        append-outer-icon="mdi-send"
                        :prepend-icon="icon"
                        filled
                        clear-icon="mdi-close-circle"
                        clearable
                        label="Your idea ?"
                        type="text"
                        @click:append="toggleMarker"
                        @click:append-outer="sendMessage"
                        @click:prepend="changeIcon"
                        @click:clear="clearMessage"
                    ></v-text-field>
                </div>
</template>

<script>
  export default {
    data: () => ({
      password: 'Password',
      show: false,
      message: '',
      marker: true,
      iconIndex: 0,
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
      icon () {
        return this.icons[this.iconIndex]
      },
    },

    methods: {
      toggleMarker () {
        this.marker = !this.marker
      },
      sendMessage () {
        this.resetIcon()
        this.clearMessage()
      },
      clearMessage () {
        this.message = ''
      },
      resetIcon () {
        this.iconIndex = 0
      },
      changeIcon () {
        this.iconIndex === this.icons.length - 1
          ? this.iconIndex = 0
          : this.iconIndex++
      },
    },
  }
</script>