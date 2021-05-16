<template>
  <div class="header">
    <button @click="logOutHandler" class="header_btn btn">Выйти</button>
    <div v-if="isVisibleBalance" class="header-balance">
      <div class="header-balance_value">
        {{ $store.getters.profileInfo.score }} баллов
      </div>
      <router-link to="/shop" class="header_link header-balance_link"
        >обменять
      </router-link>
    </div>
    <div v-if="isVisiblOpenMap" class="header_link">Показать на карте</div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    isVisibleBalance() {
      return this.$route.name === 'Profile'
    },
    isVisiblOpenMap() {
      return (
        this.$route.name === 'Search locations' ||
        this.$route.name === 'Search appraisal' ||
        this.$route.name === 'Search reconciliation' ||
        this.$route.name === 'History'
      )
    }
  },
  methods: {
    logOutHandler() {
      this.$store.dispatch('LOGOUT')
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
  .header_link {
    font-size: 10px;
    line-height: 11px;
    text-decoration: underline;
    cursor: pointer;
  }
  .header-balance_link {
    position: absolute;
    bottom: -80%;
    right: 50%;
    transform: translateX(50%);
  }
}
</style>
