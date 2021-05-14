<template>
  <div class="header">
    <button @click="handler" class="header_btn btn">Выйти</button>
    <div class="header-balance" v-if="isVisibleBalance">
      <div class="header-balance_value">13,07 баллов</div>
      <router-link to="/shop" class="header-balance_link">обменять </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isVisibleBalance() {
      return this.$route.name === 'Profile'
    }
  },
  methods: {
    handler() {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="scss">
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;

  .header_btn {
    width: 65px;
    padding: 3px 10px;
    font-size: 12px;
    line-height: 13px;
  }
  .header-balance {
    position: relative;
    font-size: 18px;
    line-height: 20px;
  }
  .header-balance_link {
    position: absolute;
    bottom: -80%;
    right: 50%;
    transform: translateX(50%);
    font-size: 10px;
    line-height: 11px;
    text-decoration: underline;
  }
}
</style>
