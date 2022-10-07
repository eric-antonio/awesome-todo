<!-- Template em Html -->
<template>
  <q-page padding>
    <q-list bordered >


      <q-item v-ripple>
        <q-item-section side top>
          <q-checkbox v-model="check1" />
        </q-item-section>

        <q-item-section>
          <q-item-label>Notifications</q-item-label>

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
          completed: false
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
