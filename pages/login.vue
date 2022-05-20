<template>
  <div class="d-flex justify-center my-12">
    <v-card max-width="500" width="500" class="pa-10">
      <h3>Login your account</h3>

      <form id="loginForm">
        <v-text-field
          name="email"
          required
          label="Email"
        ></v-text-field>
        <v-text-field
          name="password"
          required
          label="Password"
        ></v-text-field>
        <div class="d-flex justify-space-between">
          <v-btn type="submit" width="150" elevation="0" color="primary"
            >Sign In</v-btn
          >
          <v-btn to="/forgot" text>Forget Password ?</v-btn>
        </div>
      </form>

      <div class="d-flex justify-center mt-10">
        <v-btn to="/register" text>Don't have an account ?</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { checkUser } from '~/utils/checkUser'

export default {
  created() {
    if (checkUser()) {
      this.$router.push('/account')
    }
  },

  mounted() {
    let form = document.getElementById('loginForm')
    form.addEventListener('submit', (e) => {
      e.preventDefault()

      let email = e.target.email.value
      let password = e.target.password.value

      this.$axios({
        method: 'post',
        url: '/auth/login',
        data: {
          email: email,
          password: password,
        },
      })
        .then((res) => {
          console.log(res.data)
          this.$router.push('/account')
        })
        .catch((err) => {
          console.log(err.response)
        })
    })
  },
}
</script>

<style scoped></style>
