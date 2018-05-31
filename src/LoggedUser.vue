<template>
   <div>
   	<h1>System do zapisu na zajecia</h1>
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