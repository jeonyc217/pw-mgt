<template>
  <q-page class="q-pa-md">
    <q-card bordered flat>
      <CardTitle title="비밀번호 초기화 요청" />
      <q-card-section>
        <q-input v-model="ldap" type="text" label="LDAP" stack-label options-dense :rules="[val => validateEmail(val)]" />
        <q-input v-model="name" type="text" label="이름" stack-label options-dense :rules="[val => validateName(val)]" />
        <q-select v-model="reason" :options="reasonOptions" label="초기화 요청 사유 *" stack-label options-dense></q-select>
      </q-card-section>
      <q-card-section>
        <div class="text-body2 text-bold q-pb-sm">※ 비밀번호 초기화는 관리자 확인 후 메일로 안내드립니다.</div>
        <q-field :rules="[val => validateRequire(val, '체크 사항을 확인해주세요.')]" borderless dense hide-bottom-space>
          <template v-slot:control>
            <q-checkbox v-model="verifyOwnLDAP" label="초기화 요청 계정이 본인 계정이 맞는지 다시 확인하였습니다." dense></q-checkbox>
          </template>
        </q-field>
        <q-field :rules="[val => validateRequire(val, '체크 사항을 확인해주세요.')]" borderless dense hide-bottom-space>
          <template v-slot:control>
            <q-checkbox v-model="verifySSHKeyReset" label="비밀번호 초기화 시 기존 발급 받은 SSH KEY는 삭제됩니다." dense></q-checkbox>
          </template>
        </q-field>
      </q-card-section>
      <q-card-actions align="right">
        <q-btn color="primary" @click="clickConfirm">확인</q-btn>
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, computed } from 'vue'
import CardTitle from 'components/AppCommon/Title/CardTitle.vue'
import { validateEmail, validateName } from 'src/utils/validators'

const reasonOptions = ref(['비밀번호 분실', ' 비밀번호 변경 기한 만료', '비밀번호 재 변경']);

const ldap = ref(null)
const name = ref(null)
const reason = ref(null)
const verifyOwnLDAP = ref(false)
const verifySSHKeyReset = ref(false)

const clickConfirm = () => {
  console.log('clickConfirm() clicked!')
}


</script>

<style lang="scss" scoped></style>
