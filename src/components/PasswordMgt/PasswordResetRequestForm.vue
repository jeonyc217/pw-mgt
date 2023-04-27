<template>
  <q-form
    @submit.prevent="onSubmit"
    id="passwordResetRequestForm"
    class="q-gutter-md"
  >
    <q-input
      v-model="formData.ldap"
      type="text"
      label="사용자 계정 *"
      stack-label
      options-dense
      lazy-rules
      :rules="[(val) => validateEmail(val)]"
    />
    <q-input
      v-model="formData.name"
      type="text"
      label="이름 *"
      stack-label
      options-dense
      lazy-rules
      :rules="[(val) => validateName(val)]"
    />
    <q-select
      v-model="formData.reason"
      :options="reasonOptions"
      label="초기화 요청 사유 *"
      stack-label
      options-dense
    ></q-select>
    <div class="text-body6 text-bold q-pb-sm">
      ※ 비밀번호 초기화는 관리자 확인 후 메일로 안내드립니다.
    </div>
    <q-field borderless dense hide-bottom-space>
      <template v-slot:control>
        <q-checkbox
          v-model="formData.verifyOwnLDAP"
          label="초기화 요청 계정이 본인 계정이 맞는지 다시 확인하였습니다."
          dense
          :rules="[(val) => validateRequire(val, '체크 사항을 확인해주세요.')]"
        ></q-checkbox>
      </template>
    </q-field>
    <q-field borderless dense hide-bottom-space>
      <template v-slot:control>
        <q-checkbox
          v-model="formData.verifySSHKeyReset"
          label="비밀번호 초기화 시 기존 발급 받은 SSH KEY는 삭제됩니다."
          dense
          :rules="[(val) => validateRequire(val, '체크 사항을 확인해주세요.')]"
        ></q-checkbox>
      </template>
    </q-field>
    <!-- <q-card-actions align="right">
      <q-btn type="submit" color="primary" label="확인"></q-btn>
    </q-card-actions> -->
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import {
  validateEmail,
  validateName,
  validateRequire,
} from "src/utils/validators";

const reasonOptions = ref([
  "비밀번호 분실",
  " 비밀번호 변경 기한 만료",
  "비밀번호 재 변경",
]);

const formData = ref({
  ldap: null,
  name: null,
  resaon: null,
  verifyOwnLDAP: false,
  verifySSHKeyReset: false,
});

const onSubmit = (event) => {
  if (
    !formData.value.reason ||
    !formData.value.verifyOwnLDAP ||
    !formData.value.verifySSHKeyReset
  ) {
    console.log("셀렉트나 체크박스 중에 빈 데 있음");
    event.preventDefault();
    return;
  }

  console.log("PasswordResetRequestForm.onSubmit() called!");
  console.log(formData);
};
</script>

<style lang="scss" scoped></style>
