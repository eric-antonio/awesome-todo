<!-- Template em Html -->
<template>
  <q-page>

    <input type="text"
      v-model="mensagem"
      @keyup.esc="clearMesage"
      @keyup.enter="alertMesage"
    >
    <button @click="clearMesage">
      Limpar
    </button>

    <h5 class="border-grey">{{ mensagem }}</h5>

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
  .border-grey{
    border: 1px solid grey;
  }
</style>
