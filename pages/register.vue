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
          <v-img max-width="500" width="500" src="/images/register.png"></v-img>
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
            width="500"
            class="pa-10 my-10"
            flat
            style="border: 1px solid rgba(251, 192, 45, 1)"
          >
            <h3>Register an account</h3>

            <form @submit.prevent="userRegister">
              <v-text-field
                type="text"
                name="firstName"
                label="First Name"
                v-model="register.firstName"
                required
                :error-messages="errorMessages('firstName')"
                @input="resetErrorMessages('firstName')"
              ></v-text-field>

              <v-text-field
                type="text"
                name="lastName"
                label="Last Name"
                required
                v-model="register.lastName"
                :error-messages="errorMessages('lastName')"
                @input="resetErrorMessages('lastName')"
              ></v-text-field>

              <v-text-field
                type="text"
                name="email"
                label="Email"
                required
                v-model="register.email"
                :error-messages="errorMessages('email')"
                @input="resetErrorMessages('email')"
              ></v-text-field>

              <v-text-field
                type="password"
                name="password"
                label="Password"
                required
                v-model="register.password"
                :error-messages="errorMessages('password')"
                @input="resetErrorMessages('password')"
              ></v-text-field>

              <v-text-field
                type="password"
                name="confirm"
                label="Confirm Password"
                required
                v-model="register.confirmPassword"
                :error-messages="errorMessages('confirmPassword')"
                @input="resetErrorMessages('confirmPassword')"
              ></v-text-field>

              <v-btn
                :loading="isLoading"
                :disabled="isLoading"
                type="submit"
                color="primary"
                width="150"
                elevation="0"
                >Sign up</v-btn
              >
            </form>
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
      register: {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: '',
      },
    }
  },

  methods: {
    async userRegister() {
      this.isLoading = true

      try {
        const res = await this.$axios({
          method: 'POST',
          url: '/auth/register',
          data: this.register,
        })
        if (res.data.success) {
          this.userLogin({
            email: this.register.email,
            password: this.register.password,
          })
        }
      } catch (error) {
        let msg = error.response.data.error
        console.log(msg)
        this.error = msg
      }

      this.isLoading = false
    },

    async userLogin(login) {
      try {
        let response = await this.$auth.loginWith('local', { data: login })
        console.log(response)
      } catch (err) {
        console.log(err)
      }
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
