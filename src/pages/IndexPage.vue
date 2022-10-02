<!-- Template em Html -->
<template>
  <q-page padding>
    <li v-for="task in tasks"></li>
  </q-page>
</template>

<!-- Script -->
<script>
import { defineComponent } from 'vue'
export default defineComponent({

    data(){
      return{
        tasks:['Got to shop','Get Bananas ','Get appels']
      }
    }
})
</script>

<!-- Style -->
<style>

</style>
