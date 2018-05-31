<template>
   <div>
   		<h1>Witaj w systemie do zapisów na zajęcia.</h1>
   		<div v-if="email.length < 10">Ale masz krótki adres!</div>
		<div v-else-if="email.length < 15">Twój adres e-mail jest w sam raz.</div>
		<div v-else>Twój adres e-mail jest stanowczo za długi.</div>
       <label>Zaloguj się e-mailem</label>
       <input type="email" v-model="email">
       <button @click="enter()">{{buttonLabelToDisplay}}</button>
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