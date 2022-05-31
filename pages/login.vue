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
          <v-img max-width="500" width="500" src="/images/login.png"></v-img>
        </v-col>
        <v-col
          cols="12"
          sm="12"
          md="12"
          lg="6"
          class="d-flex justify-center align-center"
        >
          <v-card
            flat
            max-width="500"
            width="500"
            class="pa-10"
            style="border: 1px solid rgba(251, 192, 45, 1)"
          >
            <h3>Login your account</h3>

            <form @submit.prevent="userLogin">
              <v-text-field
                name="email"
                required
                label="Email"
                v-model="login.email"
                :error-messages="errorMessages('email')"
                @input="resetErrorMessages('email')"
              ></v-text-field>

              <v-text-field
                name="password"
                required
                label="Password"
                v-model="login.password"
                :error-messages="errorMessages('password')"
                @input="resetErrorMessages('password')"
                counter
                :type="showPassword ? 'text' : 'password'"
                :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="showPassword = !showPassword"
              ></v-text-field>

              <div class="d-flex justify-space-between">
                <v-btn
                  :loading="isLoading"
                  :disabled="isLoading"
                  type="submit"
                  width="150"
                  elevation="0"
                  color="primary"
                  >Sign In</v-btn
                >
                <v-btn to="/forgot" text>Forget Password ?</v-btn>
              </div>
            </form>

            <div class="d-flex justify-center mt-10">
              <v-btn to="/register" text>Don't have an account ?</v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </BaseLayout>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  auth: 'guest',

  data() {
    return {
      error: '',
      isLoading: false,
      showPassword: false,
      login: {
        email: '',
        password: '',
      },
    }
  },

  methods: {
    async userLogin() {
      document.cookie = 'access_token=;expires=Thu, 01 Jan 1970 00:00:00 GMT'
      this.isLoading = true
      try {
        let response = await this.$auth.loginWith('local', { data: this.login })
        console.log(response)
      } catch (err) {
        console.log(err.response.data)
        this.error = err.response.data.error
      }

      this.isLoading = false
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

<style scoped></style>
