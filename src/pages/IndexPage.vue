<!-- Template em Html -->
<template>
  <q-page>

    <input type="text" v-model="mensagem" @keyup="handelkeyup">
    <button @click="clearMesage">Limpar</button>
    <h5>{{ mensagem }}</h5>
  </q-page>
</template>


<!-- Script -->
<script>
import { defineComponent } from 'vue'

export default defineComponent({
  data(){
    return{
      mensagem: 'I love❤️ Vue.js'
    }
  },
  methods:{
    clearMesage(){
      this.mensagem = ''
    },handelkeyup(e){
      console.log(e)
      if(e.keyCode == 32){
        this.clearMesage()
      }

    }
  }
})
</script>

<!-- Style -->
<style>

</style>
