<template>
  <v-card flat class="pa-3 pl-12">
    <form @submit.prevent="userProfile">
      <div class="d-flex justify-center">
        <v-avatar size="100">
          <v-img style="position: relative" src="/images/logoTravel.png">
            <v-file-input
              class="mx-auto"
              style="
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-40%, -60%);
              "
              prepend-icon="mdi-camera"
              hide-input
              @change="handlerImage"
            ></v-file-input>
          </v-img>
        </v-avatar>
      </div>
      <div class="d-flex mt-10">
        <v-text-field
          :value="user.firstName"
          label="First Name"
          class="mr-10"
          name="firstName"
          required
          :error-messages="errorMessages('firstName')"
          @input="resetErrorMessages('firstName')"
        ></v-text-field>

        <v-text-field
          :value="user.lastName"
          label="Last Name"
          name="lastName"
          required
          :error-messages="errorMessages('lastName')"
          @input="resetErrorMessages('lastName')"
        ></v-text-field>
      </div>

      <v-text-field
        :value="user.email"
        readonly
        disabled
        label="Email"
      ></v-text-field>
      <v-btn elevation="0" color="primary" type="submit">update profile</v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      error: '',
    }
  },
  computed: {
    user() {
      return this.$store.state.auth.user.data
    },
  },

  methods: {
    userProfile(e) {
      this.$axios({
        method: 'post',
        url: '/auth/user/update',
        data: {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
        },
      })
        .then((res) => {
          console.log('update ', res.data)
          this.$auth.setUser(res.data)
        })
        .catch((err) => {
          this.error = err.response.data.error
          console.log(this.error)
        })
    },

    handlerImage(file) {
      console.log(file)
    },

    errorMessages(property) {
      console.log(this.error)
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
