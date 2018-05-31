<template>
     <ul>
     	<li v-for="participant in participants" :key="participant.id">{{participant}}</li>
	</ul>
</template>

<script>

export default {
    props: ['participants']
}
</script>
<style lang="scss">
	#vertical {
		display: list-item; 
		list-style-type: circle;		
	}
</style>