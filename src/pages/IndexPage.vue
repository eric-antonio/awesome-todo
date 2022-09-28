<!-- Template em Html -->
<template>
  <q-page>

    <input type="text"
      v-model="mensagem"
      @keyup.esc="clearMesage"
      @keyup.enter="alertMesage"
      @mouseenter="alertMesage"
    >
    <button @click="clearMesage">
      Limpar
    </button>

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
    },alertMesage(){
      alert(this.mensagem)
    }
  }
})
</script>

<!-- Style -->
<style>

</style>
