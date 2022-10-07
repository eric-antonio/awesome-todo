<!-- Template HTML5 -->
<template>
  <q-layout  view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="titulo">
          Awesome Todo
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-footer id="footer" class="bg-primary">
      <q-tabs
        dark
        v-model="tab"
        inline-label
        class="bg-primary text-white shadow-2">
        <q-route-tab name="todo" icon="list" label="Todo" to="/" />
        <q-route-tab name="stettings" icon="settings" label="Settings" to='/settings' />


      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      width="250"
      class="bg-primary"
      breakpoint="768"
    >
      <q-list dark>
        <q-item-label header>
          Navigation!
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"

        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<!-- script Js -->
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

// Lisnks na bara esquerda!
const linksList = [
  {
    title: 'Todo',
    caption: 'Task List',
    icon: 'list',
    link: '/'
  },
  {
    title: 'Settings',
    caption: 'Settings and Cofigurations',
    icon: 'settings',
    link:'/#/settings'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style lang="scss">
  .titulo{
    text-align: center;
  }
  @media screen  and (min-width: 768px){
    .q-footer{
      display: none;
    }
    #footer{
      display: none;
    }
  }
</style>
