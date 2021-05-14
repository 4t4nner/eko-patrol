<template>
  <div class="input">
    <label class="input_label">{{ text }}</label>
    <input :type="type" :name="name" class="input_item" />
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    text: {
      type: String,
      require: true,
      default: ''
    },
    type: {
      type: String,
      require: false,
      default: 'text'
    },
    name: {
      type: String,
      require: false,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  margin-bottom: 20px;
  text-align: left;
}
.input_label {
  display: block;
  padding-left: 10px;
  margin-bottom: 5px;
  font-size: 12px;
  line-height: 14px;
}
.input_item {
  width: 100%;
  padding: 15px 30px;
  border: 1px solid #7e7e7e;
  border-radius: 50px;
  outline: none;
}
</style>