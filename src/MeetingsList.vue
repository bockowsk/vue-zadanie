<template>
	<div>
	<h2>Zajęcia</h2>
    <table v-if="meetings.length > 0">
        <thead>
            <tr>
                <th>Nazwa spotkania</th>
                <th>Opis</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="meeting in meetings" :key="meeting.name">
                <td>{{ meeting.name }}</td>
                <td>{{ meeting.description }}</td>
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