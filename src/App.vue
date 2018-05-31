<template>
  <div id="app">
  	<div v-if="email.length < 10">Ale masz krótki adres!</div>
	<div v-else-if="email.length < 15">Twój adres e-mail jest w sam raz.</div>
	<div v-else>Twój adres e-mail jest stanowczo za długi.</div>
  	
	<h1>Witaj w systemie do zapisów na zajecia</h1>
	<div v-if="logged==0">
	<p>Zaloguj sie e-mail'em<input type="email" v-model="email"><button @click="toogleDiv()">Wchodzę</button></p>
  	</div>
	<div v-if="logged==1">
	<h3>Witaj {{email}}!</h3>
	<a href="" @click="toogleDiv()" v-if="logged==1">Wyloguj</a>
	</div>
  <login-form @login="logMeIn($event)"></login-form>
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
    }
  },
methods: {
 	 toogleDiv() {
     	if (this.logged == 0) {
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
