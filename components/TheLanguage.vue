<template>
  <v-menu open-on-hover offset-y>
    <template v-slot:activator="{ on, attrs }">
      <v-avatar
        size="35"
        class="mr-4 d-flex align-center pointer"
        v-bind="attrs"
        v-on="on"
      >
        <img width="100%" :src="`/images/countries/${current}.png`" alt="" />
      </v-avatar>
    </template>

    <v-list width="200">
      <v-list-item
        v-for="(item, index) in langs"
        :key="index"
        class="d-flex justify-start"
        link
        @click="changeLanguage(item.code)"
      >
        <img
          class="mr-3"
          :src="`/images/countries/${item.code}.png`"
          alt=""
          height="10px"
        />
        <span>{{ item.lang }}</span>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
export default {
  data() {
    return {
      langs: [
        { lang: 'Khmer', code: 'kh' },
        { lang: 'English', code: 'en' },
      ],
      current: 'en',
    }
  },

  methods: {
    changeLanguage(code) {
      this.current = code
    },
  },
}
</script>
