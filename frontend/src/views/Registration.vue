<template>
  <div class="registration">
    <img
      class="avatar-wrapper"
      src="../assets/img/user-icon.png"
      alt="user icon"
    />
    <input-text @inputText="loginHandler" :label="'Логин'" :name="'login'" />
    <input-text
      @inputText="telHandler"
      :label="'Введите телефон'"
      :name="'tel'"
      :type="'tel'"
    />
    <input-text
      @submit="registHandler"
      @inputText="passwordHandler"
      :label="'Задайте пароль'"
      :name="'password'"
      :type="'password'"
    />
    <button @click="registHandler" class="registration_btn btn">
      Зарегистрироваться
    </button>
  </div>
</template>

<script>
import InputText from '../components/customElements/InputText'

export default {
  name: 'Registration',
  components: {
    InputText
  },
  data() {
    return {
      login: '',
      phone: '',
      password: ''
    }
  },
  methods: {
    registHandler() {
      if (!this.login || !this.phone || !this.password) {
        return
      }
      const payload = {
        login: this.login,
        phone: this.phone,
        password: this.password
      }
      this.$store.dispatch('REGISTRATION', payload)
    },
    loginHandler(val) {
      this.login = val
    },
    telHandler(val) {
      this.phone = val
    },
    passwordHandler(val) {
      this.password = val
    }
  }
}
</script>

<style lang="scss">
.registration {
  min-height: 650px;
  height: 100vh;
  margin: 0 auto;
  padding: 20px;
  background: url('../assets/img/registration-bg.svg') top center no-repeat;
  background-size: cover;
  text-align: center;

  .avatar-wrapper {
    margin: 0 auto 10px;
    }
}
</style>
