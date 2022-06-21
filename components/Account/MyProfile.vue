<template>
  <v-card flat class="pa-3 pl-12">
    <form @submit.prevent="userProfile">
      <div class="d-flex justify-center">
        <v-avatar size="100">
          <v-img
            style="position: relative"
            :src="
              profile.imageUrl ? profile.imageUrl : '/images/logoTravel.png'
            "
          >
            <v-file-input
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-40%, -60%);
              "
              prepend-icon="mdi-camera"
              hide-input
              @change="handlerImage"
              accept="image/*"
              :disabled="uploadingImage"
            ></v-file-input>

            <v-progress-circular
              v-if="uploadingImage"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -40%);
              "
              indeterminate
              color="primary"
            ></v-progress-circular>
          </v-img>
        </v-avatar>
      </div>
      <div class="d-flex mt-10">
        <v-text-field
          v-model="profile.firstName"
          label="First Name"
          class="mr-10"
          name="firstName"
          required
          :error-messages="errorMessages('firstName')"
          @input="resetErrorMessages('firstName')"
        ></v-text-field>

        <v-text-field
          v-model="profile.lastName"
          label="Last Name"
          name="lastName"
          required
          :error-messages="errorMessages('lastName')"
          @input="resetErrorMessages('lastName')"
        ></v-text-field>
      </div>

      <v-text-field
        :value="profile.email"
        readonly
        disabled
        label="Email"
      ></v-text-field>
      <div class="d-flex align-center">
        <v-btn
          :loading="isLoading"
          :disabled="isLoading"
          elevation="0"
          color="primary"
          type="submit"
          class="mr-2"
          >update profile</v-btn
        >

        <div
          v-if="status == 'ERROR' && isLoading == false"
          class="red--text font-weight-bold"
        >
          <div v-for="(e, i) in error" :key="i">
            {{ e }}
          </div>
        </div>

        <div
          v-if="status == 'OK' && isLoading == false"
          class="green--text font-weight-bold"
        >
          Success
        </div>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      status: '',
      isLoading: false,
      profile: {
        firstName: '',
        lastName: '',
        email: '',
        imageUrl: '',
      },
      uploadingImage: false,
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user.data
    },
  },

  watch: {
    user: {
      handler(user) {
        if (user) {
          this.profile = JSON.parse(JSON.stringify(user))
        }
      },
      immediate: true,
    },
  },

  methods: {
    async userProfile(e) {
      this.isLoading = true

      try {
        const res = await this.$axios.post('/auth/user/update', {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
          imageUrl: this.profile.imageUrl,
        })
        this.$auth.setUser(res.data)
        this.status = 'OK'
      } catch (err) {
        this.error = err.response.data.error
        this.status = 'ERROR'
      }

      setTimeout(() => {
        this.isLoading = false
      }, 2000)
    },

    async handlerImage(file) {
      //limit size less than 1mb
      if (file.size > 2 * 566979) {
        return alert('Limited size less than 1mb')
      }

      this.uploadingImage = true
      //upload image
      let formData = new FormData()
      formData.append('file', file)

      try {
        const res = await this.$axios.post('/upload-image', formData)
        console.log('sending image', res.data)

        //display image on user profile image
        //but user profile image don't change yet
        //wait until user click update
        this.profile.imageUrl = res.data.data
      } catch (error) {
        console.log('sending image error', error.response.data)
      }

      setTimeout(() => {
        this.uploadingImage = false
      }, 2000)
    },

    errorMessages(property) {
      return this.error[property]
    },

    resetErrorMessages(property) {
      if (this.error[property]) {
        this.error[property] = ''
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
