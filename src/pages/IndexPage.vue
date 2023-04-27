<template>
  <!--
    추가적으로 할 내용:
    1. 공통 submit 버튼이, 기능 별 SFC에 있는 버튼의 기능을 제대로 따라하지 못함
      - 비어 있는 폼에 대한 경고 없이 바로 제출해 버림
    2. 높이 조절
      - 비밀번호 변경과 비밀번호 초기화 신청 시의 q-card 높이가 다른데, 이걸 높은 쪽으로 맞춰야 함
      -> 일단 하드코딩으로 구현은 했는데 더 좋은 방법이 없는가?
  -->
  <q-page class="col wrapper">
    <div class="hmm">
      <div class="q-pa-md" style="text-align: center">
        <span class="text-h5" style="display: inline-block"
          >카카오게임즈 비밀번호 관리</span
        >
      </div>
      <div class="q-gutter-y-md">
        <q-card bordered flat style="height: 650px">
          <q-card-section>
            <q-tabs v-model="tab" dense align="justify">
              <q-tab name="change" label="비밀번호 변경"></q-tab>
              <q-tab name="requestReset" label="비밀번호 초기화 신청"></q-tab>
            </q-tabs>

            <q-separator></q-separator>

            <q-tab-panels v-model="tab" animated ref="tabPanels">
              <q-tab-panel name="change">
                <PasswordChangeForm />
              </q-tab-panel>

              <q-tab-panel name="requestReset">
                <PasswordResetRequestForm />
              </q-tab-panel>
            </q-tab-panels>
          </q-card-section>
          <q-card-actions align="right" class="q-pa-md q-card__actions--bottom">
            <q-btn
              type="submit"
              color="primary"
              class="full-width"
              unelevated
              label="확인"
              @click="onFormSubmit"
            ></q-btn>
          </q-card-actions>
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

const onFormSubmit = () => {
  if (tab.value == "change") {
    console.log("change");
    document.getElementById("passwordChangeForm").submit();
  } else if (tab.value == "requestReset") {
    console.log("requestReset");
    document.getElementById("passwordResetRequestForm").submit();
  }
};
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

.q-card {
  display: flex;
  flex-direction: column;
}

.q-card__actions--bottom {
  margin-top: auto;
}
</style>
