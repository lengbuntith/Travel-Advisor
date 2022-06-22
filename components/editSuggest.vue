<template>
  <div>
    <!-- message alert -->
    <v-snackbar v-model="snackbar" class="d-flex justify-center" color="white">
      <div class="d-flex justify-center" :class="colorMessage">{{ text }}</div>
    </v-snackbar>
    <v-dialog v-model="dialog" width="500" close-delay="1.2">
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on" v-show="dialog == false">
          <v-btn icon color="blue" class="mr-2" :loading="loading">
            <v-icon small>mdi-pencil</v-icon>
          </v-btn>
        </v-btn>
      </template>

      <v-card class="pa-2 pa-md-4">
        <center><h3 class="mb-5">Edit Suggestion</h3></center>
        <form id="editSuggest" @submit.prevent="editEvent">
          <v-autocomplete
            :item-text="'title'"
            :items="items"
            return-object
            @change="placeData"
            dense
            type="text"
            name="place"
            required
            label="Select place"
          ></v-autocomplete>
          <v-textarea
            outlined
            clearable
            counter=""
            v-model="input.message"
            label="Message"
            name="message"
            required
            type="text"
          ></v-textarea>
          <v-btn class="mr-4 blue darken-1 white--text" type="submit">
            Update
          </v-btn>
          <v-btn type="reset" @click="clear" class="red--text"> Close </v-btn>
        </form>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: ['suggestionId'],
  data() {
    return {
      input: {
        place: '',
        message: '',
      },
      dialog: false,
      loading: false,
      items: [],
      snackbar: false,
      colorMessage: ' green--text',
      text: 'Update',
    }
  },
  methods: {
    //get place_id from user input
    placeData(place_id) {
      this.input.place = place_id._id
    },
    //create event
    editEvent() {
      this.$axios
        .post(`/suggestion/update/${this.suggestionId}`, {
          place_id: this.input.place,
          message: this.input.message,
        })
        .then((res) => {
          this.$nuxt.$emit('getSuggestion')
        })
      this.text = 'Update successful'
      this.dialog = false
      this.snackbar = true
    },
    //close post suggestion
    clear() {
      this.dialog = false
    },
  },
  watch: {
    dialog(status) {
      if (status == false) {
        document.getElementById('editSuggest').reset()
        this.input.place = ''
        this.input.message = ''
      } else {
        this.$axios.get(`/suggestion/get/${this.suggestionId}`).then((res) => {
          this.input.message = res.data.data.message
        })
        this.$axios.get('/place/all?item_per_page=100').then((res) => {
          // console.log('place', res.data.data.docs)
          this.items = res.data.data.docs
          // console.log('item', res.data.data.totalDocs)
        })
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
