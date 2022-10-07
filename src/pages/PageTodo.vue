<!-- Template em Html -->
<template>
  <q-page padding>
    <q-list bordered >


      <q-item v-ripple
        v-for="task in tasks"
        :key="task.id"
      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label>{{task.name}}</q-item-label>

        </q-item-section>
      </q-item>
    </q-list>
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
          id:1,
          name: 'Go to Shop',
          completed: true
        },
        {
          id:2,
          name: 'Go to Gym',
          completed: false
        },
        {
          id:3,
          name: 'Go to Party',
          completed: false
        },
      ]
    }
  }
})
</script>

<!-- Style -->
<style>

</style>
