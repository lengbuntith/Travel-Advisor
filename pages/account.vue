<template>
  <div class="my-10">
    <v-toolbar flat rounded color="primary" dark>
      <v-toolbar-title>Account</v-toolbar-title>
    </v-toolbar>

    <v-tabs vertical>
      <v-tab class="justify-start">
        <v-icon left>mdi-account</v-icon>
        Profile
      </v-tab>
      <v-tab class="justify-start">
        <v-icon left>mdi-bookmark</v-icon>
        Saved
      </v-tab>
      <v-tab class="justify-start">
        <v-icon left>mdi-key</v-icon>
        Change Password
      </v-tab>

      <v-tab-item v-for="c in allComponent" :key="c">
        <component :is="c"></component>
      </v-tab-item>
    </v-tabs>
    <slot></slot>
  </div>
</template>

<script>
import MyProfile from '~/components/Account/MyProfile.vue'
import SavedPlace from '~/components/Account/SavedPlace.vue'
import ChangePassword from '~/components/Account/ChangePassword.vue'
export default {
  middleware: ['auth'],
  components: {
    MyProfile,
    SavedPlace,
    ChangePassword,
  },

  data() {
    return {
      tab: null,
      allComponent: ['MyProfile', 'SavedPlace', 'ChangePassword'],
    }
  },
}
</script>

<style lang="scss" scoped></style>
