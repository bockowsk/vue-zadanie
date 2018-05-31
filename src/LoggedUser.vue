<template>
   <div>
   	<h3>Witaj {{showAuthenticatedUsername}}!</h3>
   </div>
</template>

<script>
	export default {
	data() {
		return {
			nothing: ''
		}
	 },
	methods: {
		n() {
			;
		}
	},
	computed: {
		showAuthenticatedUsername() {
			return this.user;
		}
	},
	props: ['user'],
}
</script>