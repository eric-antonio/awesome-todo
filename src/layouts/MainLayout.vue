<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs
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
    >
      <q-list>
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
  },
  {
    title: 'Github',
    caption: 'github.com/eric-antonio',
    icon: 'code',
    link: 'https://github.com/eric-antonio'
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
