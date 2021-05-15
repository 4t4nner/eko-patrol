<template>
  <div class="input" :class="{ input__small: isSmall }">
    <label class="input_label">{{ label }}</label>
    <input
        @keypress.enter="submitHandler"
      v-model="localValue"
      :type="type"
      :name="name"
      :readonly="readOnly"
      class="input_item"
    />
  </div>
</template>

<script>
export default {
  name: 'InputText',
  props: {
    defaultValue: {
      type: String,
      require: false,
      default: ''
    },
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
    },
    readOnly: {
      type: Boolean,
      require: false,
      default: false
    }
  },
  data() {
    return {
      localValue: ''
    }
  },
  mounted() {
    this.localValue = this.defaultValue
  },
  methods: {
    submitHandler() {
      if (this.$route.name === 'Registration' || this.$route.name === 'Login') {
        this.$emit('submit')
      }
    }
  },
  watch: {
    localValue(val) {
      this.$emit('inputText', val)
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
  .input_label__link {
    text-decoration: underline;
  }

  &.input__small {
    margin-bottom: 10px;

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
