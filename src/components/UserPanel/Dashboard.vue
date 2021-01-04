<template>
  <div class="dashboard">
    <div class="home__nav"><NavMenu /></div>
    <div>
      <div v-if="user" class="alert alert-success" role="alert">
        You are logged in!
      </div>
    </div>
  </div>
</template>

<script>
import NavMenu from "../Header/NavMenu.vue";

import { mapGetters } from "vuex";

export default {
  name: "Dashboard",
  components: {
    NavMenu
  },
  computed: {
    // map `this.user` to `this.$store.getters.user`
    ...mapGetters({
      user: "user"
    })
  }
};
</script>

<style lang="scss" scoped></style>
