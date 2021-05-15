<template>
  <div class="login">
    <div class="login-logo">Logo</div>
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
  padding: 100px 20px 20px;
  text-align: center;

  .login-logo {
    margin: 0 auto 50px;
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c4c4c4;
    border-radius: 50%;
  }
}
</style>
