<template>
  <div class="d-flex justify-center my-12">
    <v-card max-width="500" width="500" class="pa-10">
      <h3>Register an account</h3>

      <form id="registerForm">
        <v-text-field
          type="text"
          name="firstName"
          label="First Name"
          required
          value="leng"
          :error-messages="errorMessages('firstName')"
          @input="resetErrorMessages('firstName')"
        ></v-text-field>

        <v-text-field
          type="text"
          name="lastName"
          label="Last Name"
          required
          value="buntith"
          :error-messages="errorMessages('lastName')"
          @input="resetErrorMessages('lastName')"
        ></v-text-field>

        <v-text-field
          type="text"
          name="email"
          label="Email"
          required
          value="tith@gmail.com"
          :error-messages="errorMessages('email')"
          @input="resetErrorMessages('email')"
        ></v-text-field>

        <v-text-field
          type="password"
          name="password"
          label="Password"
          required
          value="12345678"
          :error-messages="errorMessages('password')"
          @input="resetErrorMessages('password')"
        ></v-text-field>

        <v-text-field
          type="password"
          name="confirm"
          label="Confirm Password"
          required
          value="12345678"
          :error-messages="errorMessages('confirm')"
          @input="resetErrorMessages('confirm')"
        ></v-text-field>

        <v-btn type="submit" color="primary" width="150" elevation="0"
          >Sign up</v-btn
        >
      </form>
    </v-card>
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
