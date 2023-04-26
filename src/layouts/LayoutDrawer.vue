<template>
  <q-drawer
    v-model="drawer.open"
    show-if-above
    :mini="miniState.active"
    @mouseover="setMiniState(false)"
    @mouseout="setMiniState(true)"
    mini-to-overlay
    :width="230"
    :breakpoint="500"
    bordered
    class="bg-secondary text-white"
  >
    <q-scroll-area class="fit">
      <q-list padding>
        <LayoutDrawerMenuList />
      </q-list>
    </q-scroll-area>
  </q-drawer>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "stores/storeLayout";
import LayoutDrawerMenuList from "layouts/LayoutDrawerMenuList.vue";

const { setMiniState } = useLayoutStore();
const { drawer, miniState } = storeToRefs(useLayoutStore());
</script>

<style lang="scss" scoped></style>
