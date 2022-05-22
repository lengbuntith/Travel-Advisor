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
          <v-card flat max-width="500" width="500" class="pa-10" style="border:1px solid rgba(251,192,45,1)">
            <h3>Login your account</h3>

            <form id="loginForm">
              <v-text-field name="email" required label="Email"></v-text-field>
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
        </v-col>
      </v-row>
    </BaseLayout>
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
