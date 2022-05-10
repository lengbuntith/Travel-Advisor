<template>
  <div>
    <div>{{ name }}</div>

    <label for="name">Name</label>
    <input
      type="text"
      name="name"
      id="name"
      style="border: 2px solid black"
      v-model="name"
    />

    <div class="d-flex flex-row align-center">
      <v-rating
        v-model="rating"
        color="yellow darken-3"
        background-color="grey darken-1"
        empty-icon="$ratingFull"
        half-increments
        length="10"
        hover
        small
      ></v-rating>
      <v-card class="pr-3 pl-3 ml-3">{{ rating }}</v-card>
    </div>
    <v-col width="250" height="300">
      <v-card outlined>
        <div class="d-flex flex-column justify-center pa">
          <div>
            <v-img
              width="250"
              height="250"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ankor_Wat_temple.jpg/1200px-Ankor_Wat_temple.jpg"
              alt=""
            ></v-img>
          </div>
          <v-toolbar color="teal lighten-3" class="mt-4">
            <v-text-field
              color="white"
              placeholder="Your idea ?"
              v-model="message"
              required
            ></v-text-field>
            <v-card-actions>
              <v-btn width="30" height="20" color="success" @click="send">
                send</v-btn
              >
            </v-card-actions>
            <v-snackbar v-model="hasSaved" absolute bottom left
              >Your message have been sent!
            </v-snackbar>
          </v-toolbar>
        </div>
      </v-card>
    </v-col>
  </div>
</template>

<script>
export default {
  data() {
    return {
      rating: 10,
      name: '',
      hasSaved: false,
      model: null,
      message: '',
    }
  },
  methods: {
    send() {
      if (this.message != '') {
        this.hasSaved = true
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
