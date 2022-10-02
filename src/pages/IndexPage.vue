<!-- Template em Html -->
<template>
  <q-page padding>
    <li
    v-for="task in tasks">
      {{task}}
  </li>
  </q-page>
</template>

<!-- Script -->
<script>
import { defineComponent } from 'vue'
export default defineComponent({

    data(){
      return{
        tasks:[
          {
            name: 'Go to Shop',
          }
        ]
      }
    }
})
</script>

<!-- Style -->
<style>

</style>
