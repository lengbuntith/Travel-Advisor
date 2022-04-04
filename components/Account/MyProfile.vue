<template>
  <v-card flat class="pa-3 pl-12">
    <form id="profileForm">
      <div class="d-flex justify-center">
        <v-avatar size="100">
          <img src="/images/logoTravel.png" alt="" />
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
      return this.$store.state.user
    },
  },

  mounted() {
    let form = document.getElementById('profileForm')

    form.addEventListener('submit', (e) => {
      e.preventDefault()

      this.$axios({
        method: 'post',
        url: '/auth/user/update',
        data: {
          firstName: e.target.firstName.value,
          lastName: e.target.lastName.value,
        },
      })
        .then((res) => {
          console.log('update ', res.data.data)
          this.$store.commit('SET_USER', res.data.data)
        })
        .catch((err) => {
          this.error = err.response.data.error
          console.log(this.error)
        })
    })
  },

  methods: {
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
