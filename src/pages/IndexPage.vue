<!-- Template em Html -->
<template>
  <q-page padding>
    <ul>
      <li v-for="(task, index) in tasks">
        <div>{{index}} {{task.name}}</div>
        <small>{{task.dueDate}} @{{task.dueTime}}</small>
        <button class="bt-del" @click="deleteTask(index)">DEL</button>
      </li>
    </ul>
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
          },{
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
    }, methods:{
      deleteTask(index){
        this.tasks.splice(index, 1)

      }
    }
})
</script>

<!-- Style -->
<style>
  .bt-del{
    margin-left: 10px;
  }
</style>
