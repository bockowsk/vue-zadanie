<template>
    <div>
       <button v-if="this.showNewMeeting===false"  @click="showForm()">Dodaj nowe spotkanie</button>
       <new-meeting-form v-if="this.showNewMeeting===true" @added="addNewMeeting($event)"></new-meeting-form>
       <meetings-list :meetings="meetings"></meetings-list>
    </div>
</template>

<script>
import NewMeetingForm from "./NewMeetingForm";
import MeetingsList from "./MeetingsList";

export default {
  components: {NewMeetingForm, MeetingsList},
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
      }
  }
}
</script>