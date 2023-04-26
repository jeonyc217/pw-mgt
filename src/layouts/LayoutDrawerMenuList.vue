<!-- <template>
    <template v-for="menu in menuList" :key="menu.label">
        <q-expansion-item
            expand-separator
            :content-inset-level="1"
            header-class="text-white"
            expand-icon-class="text-white"
            :icon="menu.icon"
            :label="menu.label"
        >
            <template v-for="children in menu.children" :key="children.title">
                <q-item
                    clickable
                    v-ripple
                    active-class="active-menu"
                    tag="a"
                    target="_self"
                    v-if="menuPermissions.includes(children.title)"
                    :to="children.link"
                    :v-bind="children.link"
                >
                    <q-item-section v-if="children.icon" avatar>
                        <q-icon :name="children.icon" />
                    </q-item-section>

                    <q-item-section>
                        <q-item-label>{{ children.title }}</q-item-label>
                    </q-item-section>
                </q-item>
            </template>
        </q-expansion-item>
    </template>
</template> -->
<template>
  <template v-for="menu in menuList" :key="menu.label">
    <q-expansion-item
      expand-separator
      :content-inset-level="1"
      header-class="text-white"
      expand-icon-class="text-white"
      :label="menu.label"
      :to="menu.link"
      @click="setMiniState(true)"
    >
    </q-expansion-item>
  </template>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useLayoutStore } from "stores/storeLayout";

const { setMiniState } = useLayoutStore();

const menuList = [
  {
    label: "비밀번호 변경",
    link: "/change-password",
  },
  {
    label: "비밀번호 초기화 신청",
    link: "/request-password-reset",
  },
];
</script>

<style lang="scss" scoped>
.active-menu {
  color: $primary;
  font-weight: 600;
}
</style>
