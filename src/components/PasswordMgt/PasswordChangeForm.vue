<template>
  <q-form
    @submit.prevent="onSubmit"
    id="passwordChangeForm"
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
      v-model="formData.currentPassword"
      type="password"
      label="현재 비밀번호 *"
      stack-label
      options-dense
      :rules="[
        (val) => validatePassword(val, '양식에 맞는 비밀번호를 입력해 주세요.'),
      ]"
    />

    <q-input
      v-model="formData.NewPassword"
      type="password"
      label="새 비밀번호 *"
      stack-label
      options-dense
      :rules="[
        (val) => validatePassword(val, '비밀번호가 양식에 맞지 않습니다.'),
      ]"
    />

    <q-input
      v-model="formData.NewPasswordConfirm"
      type="password"
      label="새 비밀번호 확인 *"
      stack-label
      options-dense
      :rules="[
        (val) =>
          val == formData.NewPassword ? true : '비밀번호가 일치하지 않습니다.',
      ]"
    />

    <p class="text-red-8">
      ※ 비밀번호 변경 시 기존에 발급 받은 SSH KEY는 삭제됩니다.
    </p>
    <p class="text-grey-8">
      ※ 비밀번호는 영문 대소문자와 숫자, 특수문자를 사용하여 8자리 이상의 길이로
      구성해야 합니다.
    </p>
    <p class="text-grey-8">
      ※ 사용 가능한 특수문자: @ $ ! % * # ? & ^ ( ) - _ = + ~ . , / [ ] \
    </p>
    <!-- <q-card-actions align="right">
      <q-btn type="submit" color="primary" label="확인"></q-btn>
    </q-card-actions> -->
  </q-form>
</template>

<script setup>
import { ref } from "vue";
import { validateEmail, validatePassword } from "src/utils/validators";

const formData = ref({
  ldap: null,
  currentPassword: null,
  NewPassword: null,
  NewPasswordConfirm: null,
});

const onSubmit = () => {
  console.log("PasswordChangeForm.onSubmit() called!");
  console.log(formData.value);
};
</script>

<style lang="scss" scoped>
p {
  font-size: 8pt;
}
</style>
