<template>
  <component :is="currentComponent" />
</template>

<script>
import GetLinkForm from '~/components/Forgot/GetLinkForm.vue'
import ChangePassword from '~/components/Forgot/ChangePassword.vue'
import ExpiredToken from '~/components/Forgot/ExpiredToken.vue'
export default {
  components: {
    GetLinkForm,
    ChangePassword,
    ExpiredToken,
  },

  data() {
    return {
      currentComponent: '',
    }
  },

  created() {
    //change component
    this.$nuxt.$on('forgotChangeComponent', (component) => {
      this.currentComponent = component
    })

    let token = this.$route.query.token
    if (token) {
      this.checkExpireToken()
    } else {
      this.currentComponent = 'GetLinkForm'
    }
  },

  beforeDestroy() {
    this.$nuxt.$off('forgotChangeComponent')
  },

  methods: {
    checkExpireToken() {
      let token = this.$route.query.token
      this.$axios
        .get(`/auth/reset-expire/${token}`)
        .then((res) => {
          console.log(res.data)
          this.currentComponent = 'ChangePassword'
        })
        .catch((err) => {
          console.log(err.response.data)
          this.currentComponent = 'ExpiredToken'
        })
    },
  },
}
</script>
