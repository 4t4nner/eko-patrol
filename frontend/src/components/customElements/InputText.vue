<template>
  <div class="input" :class="{ input__small: isSmall }">
    <label class="input_label">{{ label }}</label>
    <input :type="type" :name="name" class="input_item" />
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    label: {
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
    },
    isSmall: {
      type: Boolean,
      require: false,
      default: false
    }
  }
}
</script>

<style lang="scss">
.input {
  margin-bottom: 20px;
  text-align: left;

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

  &.input__small {
    .input_label {
      padding-left: 5px;
      font-size: 10px;
      line-height: 12px;
    }
    .input_item {
      padding: 7px 14px;
      font-size: 10px;
      line-height: 12px;
    }
  }
}
</style>