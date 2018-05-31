<template>
   <div>
   	<a href="" @click="leave('')">Wyloguj</a>
   </div>
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