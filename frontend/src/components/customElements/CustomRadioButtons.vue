<template>
  <div class="custom-radio">
    <div v-for="(option, i) of options" :key="i" class="custom-radio-item">
      <input
        @change="pickedHandler(picked)"
        v-model="picked"
        :id="option.id"
        :value="option.value"
        class="custom-radio-item_input"
        type="radio"
      />
      <label :for="option.id" class="custom-radio-item_label">{{
        option.value
      }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CustomRadioButtons',
  props: {
    options: {
      type: Array,
      require: true
    }
  },
  data() {
    return {
      picked: 1
    }
  },
  methods: {
    pickedHandler(val) {
      this.$emit('input', val)
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-radio {
  display: flex;
  width: 100%;

  .custom-radio-item {
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin-right: 10px;
  }
}
</style>
