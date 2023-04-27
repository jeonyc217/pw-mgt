export const validateEmail = (email) => {
  if (/^[A-Z0-9._%+-]+@(kakaogames.com|kakaogames.io)$/i.test(email) == false) {
    return "kakaogames.com 또는 kakaogames.io로 끝나는 이메일 주소를 입력해 주세요.";
  } else {
    return true;
  }
};

export const validatePassword = (value, message) => {
  const regex = RegExp(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&^()\-_=+~.,/[\]\\])[A-Za-z\d$@$!%*#?&^()\-_=+~=.,/[\]\\]{8,}$/i
  );
  if (value) {
    if (message) {
      return regex.test(value) || message;
    } else {
      return regex.test(value) || "비밀번호 규칙이 올바르지 않습니다.";
    }
  } else {
    return true;
  }
};

export const validateName = (value) => {
  if (/^[가-힣]{2,5}$/.test(value) == false) {
    return "올바른 이름을 입력하세요.";
  } else {
    return true;
  }
};

export const validateRequire = (value, message) => {
  console.log("여기 콜은 되나?");
  if (typeof value === "string") {
    if (!value) {
      return false || message;
    }
  } else if (typeof value === "object") {
    if (value.length === 0) {
      return false || message;
    }
  }
};
