<template>
  <q-page class="q-pa-md">
    <q-card bordered flat>
      <CardTitle title="비밀번호 변경" />
      <q-card-section>
        <q-input v-model="ldap" type="text" label="사용자 계정" stack-label options-dense
          :rules="[val => validateEmail(val)]" />

        <!-- A PROPER VALIDATION METHOD NEEDED -->
        <q-input v-model="currentPassword" type="password" label="현재 비밀번호" stack-label options-dense
          :rules="[val => validatePassword(val, '양식에 맞는 비밀번호를 입력해 주세요.')]" />

        <q-input v-model="NewPassword" type="password" label="새 비밀번호" stack-label options-dense
          :rules="[val => validatePassword(val, '비밀번호가 양식에 맞지 않습니다.')]" />

        <q-input v-model="NewPasswordConfirm" type="password" label="새 비밀번호 확인" stack-label options-dense
          :rules="[val => validatePasswordConfirm(val, NewPassword)]" />

        <q-card-actions align="right">
          <q-btn color="primary" @click="clickConfirm">확인</q-btn>
        </q-card-actions>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
//SOME KIND OF PINIA IMPORT HERE
import CardTitle from 'components/AppCommon/Title/CardTitle.vue'
import { validateEmail, validatePassword, validatePasswordConfirm } from 'src/utils/validators'

const ldap = ref(null)
const currentPassword = ref(null)
const NewPassword = ref(null)
const NewPasswordConfirm = ref(null)

const clickConfirm = () => {
  console.log('clickConfirm() clicked!')
}
</script>

<style lang="scss" scoped></style>
