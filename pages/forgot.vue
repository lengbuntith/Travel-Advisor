<template>
  <v-img
    src="https://images.unsplash.com/photo-1476610182048-b716b8518aae?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=959&q=80"
    gradient="to top right, rgba(100,115,201,.33), rgba(25,32,72,.7)"
    height="100vh"
  >
    <v-container class="px-5">
      <component :is="currentComponent" />
    </v-container>
  </v-img>
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
