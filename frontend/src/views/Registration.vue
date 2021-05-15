<template>
  <div class="registration">
    <div class="avatar-wrapper">
      <div class="avatar_text">Выберите аватар</div>
    </div>
    <input-text :label="'Логин'" :name="'login'" />
    <input-text :label="'Введите телефон'" :name="'tel'" :type="'tel'" />
    <input-text :label="'Дата рождения'" :name="'date'" :type="'date'" />
    <input-text
      :label="'Задайте пароль'"
      :name="'password'"
      :type="'password'"
    />
    <button @click="handler" class="registration_btn btn">Зарегистрироваться</button>
  </div>
</template>

<script>
import InputText from '../components/customElements/InputText'

export default {
  name: 'Registration',
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
