<template>
  <div style="background-color: #fafafa">
    <BaseLayout class="d-flex justify-center">
      <v-row class="d-flex justify-center pl-lg-16 pr-lg-16">
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="d-none d-lg-flex justify-center align-center"
        >
          <v-img
            max-width="500"
            width="500"
            src="/images/forgotpassword.png"
          ></v-img>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="d-flex justify-center align-center"
        >
          <v-card
            max-width="500"
            elevation="0"
            flat
            color="transparent"
            class="mx-auto pa-4 mt-16"
          >
            <div v-if="!showSuccess">
              <h2 class="mb-2 font-weight-bold">Forgot password</h2>
              <p>
                Enter your email below to get a reset link to change password
              </p>

              <form @submit="forgotPassword">
                <v-text-field
                  v-model="email"
                  name="email"
                  solo
                  placeholder="Enter your email"
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
        </v-col>
      </v-row>
    </BaseLayout>
  </div>
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
