<template>
  <div class="registration">
    <div class="avatar-wrapper">
      <div class="avatar_text">Выберите аватар</div>
    </div>
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
  margin: 0 auto;
  text-align: center;
  padding: 20px;

  .avatar-wrapper {
    margin: 0 auto 10px;
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
