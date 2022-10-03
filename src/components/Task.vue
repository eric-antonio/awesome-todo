<!-- Template -->
<tempalte>
  <li>
    <div> {{task.name}}  {{index}}</div>
    <small> {{ task.dueDate }} @ {{ task.dueTime}} </small>
    <button class="bt-del" @click="deleteTask(index)">DEL</button>
  </li>

</tempalte>

<!-- Script -->
<script>
import { defineAsyncComponent } from "vue";

export default {

  props: ['task', 'idex']
}
</script>


<!-- Style -->
<style>

</style>
