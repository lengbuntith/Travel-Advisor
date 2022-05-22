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
          <v-card max-width="500" width="500" class="pa-10 my-10" flat style="border:1px solid rgba(251,192,45,1)">
            <h3>Register an account</h3>

            <form id="registerForm">
              <v-text-field
                type="text"
                name="firstName"
                label="First Name"
                required
                :error-messages="errorMessages('firstName')"
                @input="resetErrorMessages('firstName')"
              ></v-text-field>

              <v-text-field
                type="text"
                name="lastName"
                label="Last Name"
                required
                :error-messages="errorMessages('lastName')"
                @input="resetErrorMessages('lastName')"
              ></v-text-field>

              <v-text-field
                type="text"
                name="email"
                label="Email"
                required
                :error-messages="errorMessages('email')"
                @input="resetErrorMessages('email')"
              ></v-text-field>

              <v-text-field
                type="password"
                name="password"
                label="Password"
                required
                :error-messages="errorMessages('password')"
                @input="resetErrorMessages('password')"
              ></v-text-field>

              <v-text-field
                type="password"
                name="confirm"
                label="Confirm Password"
                required
                :error-messages="errorMessages('confirm')"
                @input="resetErrorMessages('confirm')"
              ></v-text-field>

              <v-btn type="submit" color="primary" width="150" elevation="0"
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
import { checkUser } from '~/utils/checkUser'

export default {
  data() {
    return {
      error: '',
    }
  },

  created() {
    if (checkUser()) {
      this.$router.push('/account')
    }
  },

  mounted() {
    let form = document.getElementById('registerForm')
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      let userInfo = {
        firstName: e.target.firstName.value,
        lastName: e.target.lastName.value,
        email: e.target.email.value,
        password: e.target.password.value,
        confirmPassword: e.target.confirm.value,
      }

      this.$axios({
        method: 'POST',
        url: '/auth/register',
        data: userInfo,
      })
        .then((res) => {
          console.log('register success', res.data)
        })
        .catch((err) => {
          let msg = err.response.data.error
          console.log(msg)
          this.error = msg
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

<style scoped></style>
