<template>
  <BaseLayout>
    <div class="d-flex flex-row align-center" v-if="eventDetail.user">
      <v-avatar>
        <v-img
          class=""
          :src="
            eventDetail.user.imageUrl
              ? eventDetail.user.imageUrl
              : '/images/profile.png'
          "
        >
        </v-img>
      </v-avatar>

      <div class="d-flex flex-column">
        <div style="font-weight: 700" class="ml-2">
          {{ eventDetail.user.firstName + ' ' + eventDetail.user.lastName }}
        </div>
        <div
          style="font-weight: 600; font-size: 10px; color: rgba(0, 0, 0, 0.5)"
          class="ml-2"
        >
          Posted: {{ convertDate(eventDetail.createdAt) }}
        </div>
      </div>
    </div>

    <div
      class="d-flex justify-center mt-2 cover-image"
      v-if="eventDetail.place"
    >
      <v-img
        style="border-radius: 8px"
        alt=""
        :src="eventDetail.place.images[0]"
      ></v-img>
    </div>
    <div>
      <v-card-text>
        <div>
          <p style="font-weight: 700" class="mt-1 mt-lg-4">Event info:</p>
          {{ eventDetail.desc }}
          <p style="font-weight: 700" class="mt-1 mt-lg-4">
            Plese read the requirements below to make sure you want to join:
          </p>
          <ul>
            <li>
              {{
                eventDetail.requirement
                  ? eventDetail.requirement
                  : 'no requirement'
              }}
            </li>
          </ul>

          <div class="d-flex align-center" v-if="eventDetail.place">
            <p style="font-weight: 700" class="mt-1 mt-lg-4">Location:</p>
            <nuxt-link :to="`/place/${eventDetail.place._id}`" class="ml-4">{{
              eventDetail.place.title
            }}</nuxt-link>
          </div>
        </div>
      </v-card-text>
    </div>
    <div background-color="red lighten-5" style="color: red">
      <!-- <span>
        <v-icon>info</v-icon>
      </span> -->
      <!-- <span class="mdi mdi-alert"></span>
      You can cancel to join 3 days left before the event start! -->
    </div>
    <div>
      <v-btn :disabled="loading" to="/event?page=1&sort=-1" color="gray">
        Cancel
      </v-btn>

      <v-btn :loading="loading" color="success" @click="snackbar = true">
        Join
      </v-btn>
    </div>
    <div class="text-center">
      <v-snackbar
        :timeout="3500"
        v-model="snackbar"
        :vertical="vertical"
        color="light-blue darken-1
"
        class="white--text ma-0"
        height="80"
      >
        <v-alert
          height="40"
          class="ma-0"
          type="info"
          color="light-blue darken-1
"
        >
          {{ text }}
        </v-alert>
      </v-snackbar>
    </div>
  </BaseLayout>
</template>
<script>
import moment from 'moment'
export default {
  props: ['eventDetail'],
  data() {
    return {
      loading: false,

      //snackbar
      snackbar: false,
      text: 'Allow to use in the future. Stay tuned!',
      vertical: true,
    }
  },
  methods: {
    //date formatter
    convertDate(date) {
      return moment(date).format('MMMM Do YYYY, h:mm:ss a')
    },
  },
}
</script>
<style scoped>
.cover-image {
  max-height: 480px;
}
img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>
