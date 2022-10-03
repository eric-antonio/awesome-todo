<!-- Template em Html -->
<template>
  <q-page padding>
    <ul>

      <task
        v-for="(task, index) in tasks"
        task="task"
        >

      </task>
    </ul>
  </q-page>
</template>

<!-- Script -->
<script>
import { defineComponent } from 'vue'
import Task from '../components/Task.vue'

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
    },
    // importamos a pagina Task!
    components:{
    "task": require("components/Task.vue").default,
    Task
}
})
</script>

<!-- Style -->
<style>
  .bt-del{
    margin-left: 10px;
  }
</style>
