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
        ></v-text-field>

        <v-text-field
          type="text"
          name="lastName"
          label="Last Name"
          required
        ></v-text-field>

        <v-text-field
          type="text"
          name="phone"
          label="Phone number"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          name="password"
          label="Password"
          required
        ></v-text-field>

        <v-text-field
          type="password"
          name="confirm"
          label="Confirm Password"
          required
        ></v-text-field>

        <v-btn type="submit" color="primary" width="150" elevation="0"
          >Sign up</v-btn
        >
      </form>
    </v-card>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped></style>
