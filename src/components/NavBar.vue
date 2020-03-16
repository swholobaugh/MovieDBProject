<template>
  <v-app-bar app clipped-left dark color="green">
    <v-app-bar-nav-icon v-if="user" @click="drawer ? hideDrawer() : showDrawer()" />
    <v-toolbar-title class="font-weight-light">
      <span>UltimateMovie</span>
      <span class="font-weight-regular">DB</span>
    </v-toolbar-title>
  </v-app-bar>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'NavBar',
  computed: {
    ...mapGetters({
      drawer: 'getDrawer',
      user: 'getUser',
    }),
  },
  methods: {
    ...mapActions(['hideDrawer', 'showDrawer']),
  },
}
</script>