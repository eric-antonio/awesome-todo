<!-- Template em Html -->
<template>
  <q-page padding>
    <li v-for="task in tasks">
      <div>{{task.name}}</div>
      <small>{{task.dueDate}} @{{task.dueTime}}</small>
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
            name: 'Go to Shcoll',
            dueDate:'2022/10/03',
            dueTime: '09:00H'
          },
          {
            name: 'Go tO Hork',
            dueDate:'2022/10/03',
            dueTime: '10:00H'
          },{
            name: 'Go to GYM',
            dueDate:'2022/10/03',
            dueTime: '17:00H'
          }
        ]
      }
    }
})
</script>

<!-- Style -->
<style>

</style>
