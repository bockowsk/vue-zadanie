<template>
  <div id="app">  	
	

	<div v-show="logged==1">
		<logged-user :user="authenticatedUsername"></logged-user>
		<logout-form @logout="toogleDiv($event)"></logout-form>
		<meeting-page></meeting-page>
	</div>
	
	<div v-if="logged==0">	
  		<login-form @login="toogleDiv($event)" :button-label="'Wejdź'"></login-form>
  	</div>
  </div>
</template>

<script>
import "milligram";
import LoginForm from "./LoginForm";
import LogoutForm from "./LogoutForm";
import LoggedUser from "./LoggedUser";
import MeetingPage from "./MeetingPage";
export default {
  name: 'app',
  components: {LoginForm, LogoutForm, LoggedUser, MeetingPage},
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
  width: 70%;
  margin: auto;
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
