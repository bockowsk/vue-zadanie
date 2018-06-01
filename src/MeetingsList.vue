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
                <td>{{ meeting.description }}</td>
                <td>
               		<ul>
     					<li v-for="participant in meeting.participants" id="vertical">{{participant}}</li>
					</ul>
                </td>
                <td>
                	<button v-if="meeting.participants.indexOf(usern)==-1"  class="button button-outline" @click="register(meeting)" :data-id="meeting.name">Zapisz sie</button>
                	<button v-else  class="button button-outline" @click="unregister(meeting)" :data-id="meeting.name">wypisz sie</button>
                	&nbsp
                	<button v-if="meeting.participants.length==0" @click="deleteMeeting(meeting)">Usun puste spotkanie</button></td>
            </tr>
        </tbody>
    </table>
    <p v-else>Brak zaplanowanych spotkan</p>
    </div>
</template>

<script>
export default {
    props: ['meetings', 'usern'],
    methods: {
    	deleteMeeting(meeting) {
    		var index = this.meetings.indexOf(meeting);
    		this.meetings.splice(index,1);
    	},
    	register(m) {
    		this.$emit('added', m);
    	}
    }
}

</script>
<style lang="scss">
	#list {
		width: 70%;
		margin: auto;
	}
		#vertical {
		display: list-item; 
		list-style-type: circle;		
	}
	
</style>