<template>
  <!-- 
1. 활성화 탭마다 높이가 다르다.. 이거 고정하는 게 나을까?
-->
  <q-page class="col wrapper">
    <div class="hmm">
      <div class="q-pa-md" style="text-align: center">
        <span class="text-h5" style="display: inline-block"
          >카카오게임즈 비밀번호 관리</span
        >
      </div>
      <div class="q-gutter-y-md">
        <q-card bordered>
          <q-tabs v-model="tab" dense align="justify">
            <q-tab name="change" label="비밀번호 변경"></q-tab>
            <q-tab name="requestReset" label="비밀번호 초기화 신청"></q-tab>
          </q-tabs>
          <q-separator></q-separator>
          <q-tab-panels v-model="tab">
            <q-tab-panel name="change">
              <PasswordChangeForm />
            </q-tab-panel>
            <q-tab-panel name="requestReset">
              <PasswordResetRequestForm />
            </q-tab-panel>
          </q-tab-panels>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup>
import { ref } from "vue";
import PasswordChangeForm from "components/PasswordMgt/PasswordChangeForm.vue";
import PasswordResetRequestForm from "components/PasswordMgt/PasswordResetRequestForm.vue";

const tab = ref("change");
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

@media screen and (max-width: 350px) {
  .hmm {
    width: 100%;
  }
}
@media screen and (min-width: 350px) and (max-width: 700px) {
  .hmm {
    width: 350px;
  }
}
@media screen and (min-width: 700px) {
  .hmm {
    width: 50%;
    max-width: 500px;
  }
}
</style>
