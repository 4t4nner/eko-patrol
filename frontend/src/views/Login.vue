<template>
  <div class="login">
    <div class="login-logo">Logo</div>
    <input-text :label="'Введите  логин'" :name="'login'" />
    <input-text
      :label="'Введите пароль'"
      :name="'password'"
      :type="'password'"
    />
    <button @click="handler" class="btn__arrow btn">Войти</button>
  </div>
</template>

<script>
import InputText from '../components/customElements/InputText'

export default {
  name: 'Login',
  components: {
    InputText
  },
  methods: {
    handler() {
      this.$router.push('profile')
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
