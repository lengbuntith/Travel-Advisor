<template>
  <v-card
    max-width="500"
    elevation="0"
    outlined
    color="transparent"
    class="mx-auto pa-4 mt-16"
  >
    <div v-if="!showSuccess">
      <h2 class="mb-2 white--text font-weight-bold">Forgot password</h2>
      <p class="white--text">
        Enter your email below to get a reset link to change password
      </p>

      <form @submit="forgotPassword">
        <v-text-field
          v-model="email"
          name="email"
          placeholder="Enter your email"
          solo
          required
          :error-messages="errorMessage"
        >
          <template v-slot:message="{ message }">
            <v-alert dense class="ml-n3" type="error">
              {{ message }}
            </v-alert>
          </template>
        </v-text-field>
        <v-btn
          type="submit"
          elevation="0"
          color="primary"
          height="40"
          width="100%"
          :loading="loading"
          :disabled="loading"
          >submit</v-btn
        >
      </form>
    </div>

    <div v-else>
      <v-alert prominent type="success"> success </v-alert>
    </div>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      email: null,
      errorMessage: '',
      showSuccess: false,
      loading: false,
    }
  },

  methods: {
    forgotPassword(e) {
      e.preventDefault()
      this.errorMessage = ''
      this.loading = true
      this.$axios
        .post('/auth/forgot-password', {
          email: this.email,
        })
        .then((res) => {
          this.loading = false
          this.showSuccess = true
          console.log(res.data)
        })
        .catch((err) => {
          this.loading = false
          this.errorMessage = err.response.data.error
        })
      console.log('submit')
    },
  },
}
</script>

<style scoped></style>
