<template>
    <div id="meeting">
    <form @submit.prevent="addNewMeeting()">
            <h3>Dodaj nowe spotkanie</h3>
            <label>Nazwa</label>
            <input type="text" v-model="newMeeting.name"/>
            <label>Opis</label>
            <textarea v-model="newMeeting.description"></textarea>
            <button>Dodaj</button><p v-if="submitEmpty===true" style="color:red">Spotkanie musi miec nazwe!</p>
    </form>
    </div>
</template>

<script>
export default {
  data() {
      return {
          newMeeting: {},
          submitEmpty: false,
      };
  },
  methods: {
      addNewMeeting() {
        if (!this.newMeeting.name) {
        	this.submitEmpty=true;
        }
        else {
        	this.submitEmpty=false;
        	this.newMeeting.participants=[];
        	this.$emit('added', this.newMeeting);
        	this.newMeeting = {};
        }
    }
  }
}
</script>
<style lang="scss">
	#meeting {
		width: 70%;
		margin: auto;
	}
</style>