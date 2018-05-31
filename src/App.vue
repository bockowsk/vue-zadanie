<template>
  <div id="app">  	
	

	<div v-if="logged==1">
		<h3>Witaj {{authenticatedUsername}}!</h3>
		<a href="" @click="toogleDiv('')" v-if="logged==1">Wyloguj</a>
	</div>
	
	<div v-if="logged==0">	
  		<login-form @login="toogleDiv($event)"></login-form>
  	</div>
<!--
  	<login-form @login="enter($event)" :button-label="'Wejdź'"></login-form>
	<login-form @login="enter($event)" :button-label="'Wleć'"></login-form>
	<login-form @login="enter($event)" :button-label="'Zaloguj się jak człowiek'"></login-form>
-->
  </div>
</template>

<script>
import "milligram";
import LoginForm from "./LoginForm";
export default {
  name: 'app',
  components: {LoginForm},
  data () {
    return {
      msg: 'Hello World!!!',
      email: '',
      logged: 0,
      authenticatedUsername: '',
    }
  },
methods: {
 	 toogleDiv(username) {
     	if (this.logged == 0) {
     		this.authenticatedUsername = username;
     		this.logged=1;
     	}
     	else {
     		this.logged=0;
     	}
  	},
  	logMeIn(username) {
 		 this.authenticatedUsername = username;
	}
}
   
}

</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
