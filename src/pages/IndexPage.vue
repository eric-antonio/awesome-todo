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

    <h5
      v-if="mensagem.length"
      class="border-grey">
      {{ mensagem }}
    </h5>


    <h6 v-else>
       No mesage enterd!😒
    </h6>

    <hr>

    <p>Upercase: {{mesageUpercase()}}</p>

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
    },mesageUpercase(){
      return this.mensagem.toUpperCase()
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
