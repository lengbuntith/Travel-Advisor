<template>
  <v-card flat class="pa-3 pl-12">
    <form @submit.prevent="userChangePassword">
      <v-text-field
        name="password"
        required
        label="Current Password"
        :error-messages="errorMessages('password')"
        @input="resetErrorMessages('password')"
        counter
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>
      <v-text-field
        name="newPassword"
        required
        label="New Password"
        :error-messages="errorMessages('newPassword')"
        @input="resetErrorMessages('newPassword')"
        counter
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
        @click:append="showPassword = !showPassword"
      ></v-text-field>

      <div class="d-flex align-center">
        <v-btn
          width="200"
          :loading="loading"
          :disabled="loading"
          elevation="0"
          color="primary"
          type="submit"
          class="mr-2"
        >
          change password
        </v-btn>

        <div
          v-if="status == 'ERROR' && loading == false"
          class="red--text font-weight-bold"
        >
          {{ error }}
        </div>

        <div
          v-if="status == 'OK' && loading == false"
          class="green--text font-weight-bold"
        >
          Success
        </div>
      </div>
    </form>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      error: '',
      loading: false,
      status: '',
      showPassword: false,
    }
  },

  methods: {
    async userChangePassword(e) {
      this.loading = true

      try {
        const res = await this.$axios.post('/auth/user/update-password', {
          password: e.target.password.value,
          newPassword: e.target.newPassword.value,
        })
        console.log(res.data)

        if (res.data.success == false) {
          this.status = 'ERROR'
          this.error = res.data.error
        } else {
          this.status = 'OK'
        }
      } catch (err) {
        console.log(err)
      }

      setTimeout(() => {
        this.loading = false
      }, 2000)
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

<style lang="scss" scoped></style>
