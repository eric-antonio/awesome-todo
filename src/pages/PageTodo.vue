<!-- Template em Html -->
<template>
  <q-page class="q-pa-md">
    <q-list bordered  separator >


      <q-item v-ripple
        v-for="task in tasks"
        :key="task.id"
        @click="task.completed = !task.completed"
        clickable
        :class="!task.completed ? 'bg-blue-3' : 'bg-green-3'"

      >
        <q-item-section side top>
          <q-checkbox v-model="task.completed" />
        </q-item-section>

        <q-item-section>
          <q-item-label :class="{'text-strikethrough' : task.completed}">
            {{task.name}}
          </q-item-label>
        </q-item-section>

        <q-item-section side>
          <div class="row">

            <div class="column justify-center">
              <q-icon name="today"  size='19px' class="q-mr-sm"/>
            </div>

            <div class="column">

              <q-item-label caption class="row justify-end">

                {{task.dueDate}}

              </q-item-label>

              <q-item-label caption class="row justify-end">

                <samll>
                  {{task.dueTime}}
                </samll>

              </q-item-label>

            </div>

          </div>


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
          completed: true,
          dueDate:'2022/09/01',
          dueTime:'17:00h'

        },
        {
          id:2,
          name: 'Go to Gym',
          completed: false,
          dueDate:'2022/09/06',
          dueTime:'14:00h'

        },
        {
          id:3,
          name: 'Go to Party',
          completed: false,
          dueDate:'2022/09/09',
          dueTime:'12:00h'

        },
      ]
    }
  }
})
</script>

<!-- Style -->
<style>

</style>
