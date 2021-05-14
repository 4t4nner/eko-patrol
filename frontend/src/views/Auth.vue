<template>
  <div class="auth">
    <div class="welcome-wrapper">
      <div class="welcome-logo">Logo</div>
      <div class="welcome-text">Добро пожаловать</div>
    </div>
    <div class="auth-footer">
      <div class="footer-login">
        <router-link class="btn__arrow btn" to="/login">
          Войти
        </router-link>
      </div>
      <div class="footer-reg">
        Нет аккаунта?
        <router-link class="footer-reg_link" to="/registration">
          Зарегистрируйтесь
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Auth'
}
</script>

<style lang="scss" scoped>
.auth {
  position: relative;
  height: 100vh;
  padding-top: 100px;
  text-align: center;
}
.welcome-logo {
  width: 200px;
  height: 200px;
  margin: 0 auto 30px;
  border-radius: 50%;
  background: #c4c4c4;
}
.welcome-text {
  font-size: 24px;
  line-height: 28px;
}
.auth-footer {
  position: absolute;
  left: 50%;
  bottom: 50px;
  transform: translateX(-50%);
  width: 100%;
  font-size: 14px;
  line-height: 16px;
}
.footer-login {
  margin-bottom: 10px;
}
.footer-reg_link {
  text-decoration: underline;
}
</style>