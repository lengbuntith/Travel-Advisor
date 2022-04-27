<template>
  <v-card flat class="pa-3 pl-12">
    <form id="passwordForm">
      <v-text-field
        name="password"
        required
        label="Current Password"
        :error-messages="errorMessages('password')"
        @input="resetErrorMessages('password')"
      ></v-text-field>
      <v-text-field
        name="newPassword"
        required
        label="New Password"
        :error-messages="errorMessages('newPassword')"
        @input="resetErrorMessages('newPassword')"
      ></v-text-field>

      <v-btn width="200" :disabled="loading" elevation="0" color="primary" type="submit">
        <span v-show="!loading">change password</span>
        <v-progress-circular
          v-if="loading"
          indeterminate
          color="white"
        ></v-progress-circular>
      </v-btn>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      loading: false,
    }
  },
  mounted() {
    let form = document.getElementById('passwordForm')

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      this.loading = true
      this.$axios({
        method: 'post',
        url: '/auth/user/update-password',
        data: {
          password: e.target.password.value,
          newPassword: e.target.newPassword.value,
        },
      })
        .then((res) => {
          console.log(res.data.data)
          setTimeout(() => {
            this.loading = false
          }, 2000)
        })
        .catch((err) => {
          this.error = err.response.data.error
          console.log(this.error)
          setTimeout(() => {
            this.loading = false
          }, 2000)
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
