<template>
  <q-card-section class="row items-center card-title-box">
    <div class="card-title">{{ title }}</div>
  </q-card-section>
</template>

<script setup>
const props = defineProps({
  title: String,
});
</script>

<style lang="scss" scoped>
.card-title {
  font-size: 1.15rem;
  line-height: 1.25em;
  font-weight: bold;
  color: #757575 !important;
}
</style>
