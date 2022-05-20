<template>
  <v-card
    max-width="500"
    elevation="0"
    outlined
    color="transparent"
    class="mx-auto pa-4 mt-16"
  >
    <div v-if="!showSuccess">
      <h2 class="mb-2 white--text font-weight-bold">Change new password</h2>
      <p class="white--text">Enter new password you want to change</p>

      <form @submit="changePassword">
        <v-text-field
          name="password"
          placeholder="Enter new password"
          solo
          required
          :error-messages="returnMessage('password')"
          ><template v-slot:message="{ message }">
            <v-alert dense class="ml-n3" type="error">
              {{ message }}
            </v-alert>
          </template></v-text-field
        >

        <v-text-field
          name="confirmPassword"
          placeholder="Confirm password"
          solo
          required
          :error-messages="returnMessage('confirmPassword')"
        >
          <template v-slot:message="{ message }">
            <v-alert dense class="ml-n3" type="error">
              {{ message }}
            </v-alert>
          </template>
        </v-text-field>

        <!-- error alert -->
        <v-alert
          :value="errorMessage.token ? true : false"
          transition="scale-transition"
          prominent
          dense
          type="error"
        >
          {{ errorMessage.token }}
          <nuxt-link
            @click.native="$nuxt.$emit('forgotChangeComponent', 'GetLinkForm')"
            to="/forgot"
            class="white--text"
            >Get new link</nuxt-link
          >
        </v-alert>

        <v-btn
          type="submit"
          elevation="0"
          color="primary"
          height="40"
          width="100%"
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
      errorMessage: '',
      showSuccess: false,
    }
  },

  methods: {
    changePassword(e) {
      e.preventDefault()

      let password = e.target.password.value
      let confirmPassword = e.target.confirmPassword.value

      this.errorMessage = ''
      let token = this.$route.query.token

      this.$axios
        .post(`/auth/reset-password/${token}`, {
          password: password,
          confirmPassword: confirmPassword,
        })
        .then((res) => {
          this.showSuccess = true
          console.log(res.data)
        })
        .catch((err) => {
          console.log(err.response.data)
          this.errorMessage = err.response.data.error
        })

      console.log('submit')
    },

    returnMessage(key) {
      try {
        return this.errorMessage[key]
      } catch (error) {
        return ''
      }
    },
  },
}
</script>

<style scoped></style>
