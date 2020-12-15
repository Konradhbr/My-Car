<template>
  <div><h2>1adasdasd</h2>
              <div v-if="user" class="alert alert-success" role="alert">You are logged in!</div>
</div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
	name: 'Dashboard',
	computed: {
		// map `this.user` to `this.$store.getters.user`
		...mapGetters({
			user: "user"
		})
	}

}
</script>

<style lang="scss" scoped>

</style>