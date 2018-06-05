<template>
   <div id="login">
   		<h1>Witaj w systemie do zapisów na zajęcia.</h1>
   		<div v-if="email.length < 10">Ale masz krótki adres!</div>
		<div v-else-if="email.length < 15">Twój adres e-mail jest w sam raz.</div>
		<div v-else>Twój adres e-mail jest stanowczo za długi.</div>
       <label>Zaloguj się e-mailem</label>
       <input type="email" v-model="email">
       <button v-if="email.length >8 && email.length < 20" @click="enter()">{{buttonLabelToDisplay}}</button>
       <button v-else>{{buttonLabelToDisplay}}</button>
   </div>
</template>

<script>
	export default {
	 data() {
	     return {
	         email: '',
	     }
	 },
	 methods: {
	     enter() {
	         this.$emit('login', this.email);
	     },
	 },
	props: ['buttonLabel'],
/*	
	mounted() {
		if (!this.buttonLabel) {
	    	this.buttonLabel = 'Zaloguj się';
	  	}
	},
*/
	computed: {
 		buttonLabelToDisplay() {
    		return this.buttonLabel || 'Zaloguj się';
  		}
	},
}
</script>
<style lang="scss">
	#login {
		width: 25%;
		margin: auto;
	}
</style>