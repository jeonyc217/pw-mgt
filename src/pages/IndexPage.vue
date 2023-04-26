<template>
  <q-page class="q-pa-md wrapper" style="background-color: #ccffcc">
    <div style="background-color: #ffccff">
      <div class="q-pa-md" style="text-align: center">
        <span class="text-h4" style="display: inline-block"
          >카카오게임즈 비밀번호 관리</span
        >
      </div>
      <div class="q-gutter-y-md" style="width: 450px">
        <q-card bordered flat>
          <q-tabs v-model="tab" dense>
            <q-tab name="change" label="비밀번호 변경"></q-tab>
            <q-tab name="requestReset" label="비밀번호 초기화 신청"></q-tab>
          </q-tabs>
          <q-separator></q-separator>
          <q-tab-panels v-model="tab" animated>
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
</style>
