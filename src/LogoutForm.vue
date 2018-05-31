<template>
   	<button @click="leave()">Wyloguj</button>
</template>

<script>
export default {
 data() {
     return {
         email: ''
     }
 },
 methods: {
     leave() {
         this.$emit('logout', '');
     }
 }
}
</script>