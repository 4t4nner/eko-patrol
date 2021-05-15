<template>
  <div class="custom-select" @blur="open = false">
    <div class="selected" :class="{ open: open }" @click="openSelectHandler">
      {{ selected }}
    </div>
    <div class="items" :class="{ selectHide: !open }">
      <div
        v-for="(option, i) of options"
        :key="i"
        @click="
          selected = option
          open = false
          $emit('input', option)
        "
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      required: true
    },
    default: {
      type: String,
      required: false,
      default: null
    }
  },
  data() {
    return {
      selected: this.default
        ? this.default
        : this.options.length > 0
        ? this.options[0]
        : null,
      open: false
    }
  },
  mounted() {
    this.$emit('input', this.selected)
  },
  methods: {
    openSelectHandler() {
      if (this.$route.name !== 'Offer') {
        return
      }
      this.open = !this.open
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-select {
  position: relative;
  width: 100%;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  outline: none;
}

.custom-select .selected {
  padding: 5px 15px;
  background-color: #fff;
  border-radius: 13px;
  border: 1px solid #232323;
  color: #000;
  cursor: pointer;
  user-select: none;
}

.custom-select .selected.open {
  border: 1px solid #232323;
  border-radius: 13px 13px 0 0;
}

.custom-select .selected:after {
  position: absolute;
  content: '';
  top: 65%;
  right: 10px;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border: 5px solid transparent;
  border-color: #000 transparent transparent transparent;
}

.custom-select .items {
  color: #fff;
  border-radius: 0 0 13px 13px;
  overflow: hidden;
  border-right: 1px solid #232323;
  border-left: 1px solid #232323;
  border-bottom: 1px solid #232323;
  position: absolute;
  background-color: #fff;
  left: 0;
  right: 0;
  z-index: 1;
}

.custom-select .items div {
  color: #000;
  padding: 5px 15px;
  cursor: pointer;
  user-select: none;
}

.custom-select .items div:hover {
  background-color: #c7c7c7ff;
}

.selectHide {
  display: none;
}
</style>