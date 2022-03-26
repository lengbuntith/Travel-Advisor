<template>
  <div class="d-flex justify-center my-12">
    <v-card max-width="500" width="500" class="pa-10">
      <h3>Login your account</h3>

      <form id="loginForm">
        <v-text-field label="Phone number"></v-text-field>
        <v-text-field label="Password"></v-text-field>
      </form>

      <div class="d-flex justify-space-between">
        <v-btn
          width="150"
          elevation="0"
          color="primary"
          @click="dialog.value = false"
          >Sign In</v-btn
        >
        <v-btn text>Forget Password ?</v-btn>
      </div>

      <div class="d-flex justify-center mt-10">
        <v-btn to="/register" text>Don't have an account ?</v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
    mounted () {
        
    },
}
</script>

<style lang="scss" scoped></style>
