<template>
	<div id="list">
	<h2>Zajęcia</h2>
    <table v-if="meetings.length > 0">
        <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
                <th>Uczestnicy</th>
                <th span=2></th>
                
            </tr>
        </thead>
        <tbody>
            <tr v-for="meeting in meetings" :key="meeting.name">
                <td>{{ meeting.name }}</td>
                <td><h1>{{meeting.participants.length}}</h1></td>
                
                <td><participants-list :participants="meeting.participants"></participants-list></td>
                <td>
                	<button class="button button-outline" @click="register(meeting,usern)" :data-id="meeting.name">Zapisz sie</button>
                	&nbsp
                	<button v-if="!participants" @click="deleteMeeting(meeting)">Usun puste spotkanie</button></td>
            </tr>
        </tbody>
    </table>
    <p v-else>Brak zaplanowanych spotkan</p>
    </div>
</template>

<script>
import ParticipantsList from "./ParticipantsList";
export default {
	components: {ParticipantsList},
    props: ['meetings', 'usern'],
    methods: {
    	deleteMeeting(meeting) {
    		var index = this.meetings.indexOf(meeting);
    		this.meetings.splice(index,1);
    	},
    	register(m,u) {
    		alert("user: "+u);
    		alert("meeting: "+m.name);
    		m.participants.push(u);
    		alert("element"+m.participants[0]);
    	}
    }
}

</script>
<style lang="scss">
	#list {
		width: 70%;
		margin: auto;
	}
</style>