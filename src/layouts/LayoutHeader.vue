<template>
  <q-header elevated class="bg-grey-10">
    <q-toolbar>
      <q-btn
        flat
        @click="setDrawer"
        round
        dense
        icon="menu"
        aria-label="Menu"
      />
      <router-link to="/"></router-link>
      <q-space />
      <!-- <q-btn label="Profile" unelevated to="/profile/" />
      <q-btn label="Logout" unelevated @click="setLogout" /> -->
    </q-toolbar>
  </q-header>
</template>

<script setup>
import { useLayoutStore } from "stores/storeLayout";

const { setDrawer } = useLayoutStore();
</script>

<style lang="scss" scoped>
.kg-logos {
  display: block;
  overflow: hidden;
  margin: 1rem;
  width: 8.5rem;
  height: 2rem;
  left: 0px;
  // background-image: url($logo-image);
  background-size: 385px 380px;
  background-position: -83px -32px;
}
</style>
