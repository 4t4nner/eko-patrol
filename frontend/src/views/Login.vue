<template>
  <div class="login">
    <img class="login-logo" src="../assets/img/login-logo.png" alt="login logo">
    <input-text
      @inputText="loginHandler"
      :label="'Введите  логин'"
      :name="'login'"
    />
    <input-text
      @submit="singinHandler"
      @inputText="passwordHandler"
      :label="'Введите пароль'"
      :name="'password'"
      :type="'password'"
    />
    <button @click="singinHandler" class="btn__arrow btn">Войти</button>
  </div>
</template>

<script>
import InputText from '../components/customElements/InputText'

export default {
  name: 'Login',
  components: {
    InputText
  },
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    singinHandler() {
      if (!this.login || !this.password) {
        return
      }
      const payload = {
        login: this.login,
        password: this.password
      }
      this.$store.dispatch('LOGIN', payload)
    },
    loginHandler(val) {
      this.login = val
    },
    passwordHandler(val) {
      this.password = val
    }
  }
}
</script>

<style lang="scss">
.login {
  min-height: 650px;
  height: 100vh;
  padding: 100px 20px 20px;
  background: url("../assets/img/login-bg.svg") top center no-repeat;
  background-size: cover;
  text-align: center;

  .login-logo {
    margin: 0 auto 50px;
  }
}
</style>
