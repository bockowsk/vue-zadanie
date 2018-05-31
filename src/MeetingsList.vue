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
                <td>Uczestnicy</td>
                <td><button class="button button-outline">Zapisz sie</button>&nbsp<button>Usun puste spotkanie</button></td>
            </tr>
        </tbody>
    </table>
    <p v-else>Brak zaplanowanych spotkan</p>
    </div>
</template>

<script>
export default {
    props: ['meetings']
}
</script>
<style lang="scss">
	#list {
		width: 70%;
		margin: auto;
	}
</style>