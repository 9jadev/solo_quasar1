<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Awesome Todo
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-footer>
       <q-tabs>
        <q-route-tab v-for="(links, index) in essentialLinks"
        :to="links.link"
        :name="links.title" 
        :icon="links.icon" 
        :label="links.title"
        :key="index" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      :breakpoint="767"
      :width="230"
      content-class="bg-primary"
    >
      <q-list dark>
        <q-item-label header class="text-grey-8">Navigation</q-item-label>
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
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Todos',
          icon: 'list',
          link: '/'
        },
        {
          title: 'Settings',
          icon: 'settings',
          link: '/settings'
        }
      ]
    }
  }
}
</script>
<style>
  @media screen and (min-width: 768px) {
    .q-footer{
      display: none;
    }
  }
  .q-drawer > .q-router-link--exact-active{
      color: white !important;
    }
</style>
