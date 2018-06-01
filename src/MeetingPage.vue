<template>
    <div>
       <button v-if="this.showNewMeeting===false"  @click="showForm()">Dodaj nowe spotkanie</button>
       <new-meeting-form v-if="this.showNewMeeting===true" @added="addNewMeeting($event)"></new-meeting-form>
       <meetings-list :meetings="meetings" :usern="user" @removed="removeParticipant($event)" @added="addNewParticipant($event)"></meetings-list>
    </div>
</template>

<script>
import Vue from 'vue';
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default {
  components: {NewMeetingForm, MeetingsList},
  props: ['user'],
  data() {
      return {
          meetings: [],
          showNewMeeting:  false,
          
      };
  },
  methods: {
      addNewMeeting(meeting) {
          this.meetings.push(meeting);
      },
      showForm() {
      	this.showNewMeeting = true;
      },
      addNewParticipant(meeting) {
      	var index=this.meetings.indexOf(meeting);
      	//this.meetings[index].participants.push(this.user);
      	if (meeting.participants.indexOf(this.user)===-1) {
      		meeting.participants.push(this.user);
      		Vue.set(this.meetings,index,meeting);
      		//alert("ile: "+this.meetings[index].participants.length);
      	}
      },
      removeParticipant(meeting) {
      	var index=this.meetings.indexOf(meeting);
      	//this.meetings[index].participants.push(this.user);
      	var index2=meeting.participants.indexOf(this.user)
      	if (index2!==-1) {
      		meeting.participants.splice(index2,1);
      		Vue.set(this.meetings,index,meeting);
      		//alert("ile: "+this.meetings[index].participants.length);
      	}
      },
      
  }
}
</script>