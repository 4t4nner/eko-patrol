<template>
  <div class="search">
    <Header />
    <div class="search-wrapper">
      <div class="search-item">
        <router-link
          to="/search/locations"
          class="btn btn__arrow search-item_link"
          >Локации</router-link
        >
      </div>
      <div class="search-item">
        <template v-if="$store.getters.profileInfo.level >= 2">
          <router-link
            to="/search/appraisal"
            class="btn btn__arrow search-item_link"
            >Оценка</router-link
          >
        </template>
        <template v-else>
          <div class="search-item_text">Оценка</div>
          <button class="btn btn__disable">Откроется со 2 уровня</button>
        </template>
      </div>
      <div class="search-item">
        <template v-if="$store.getters.profileInfo.level >= 3">
          <router-link
            to="/search/reconciliation"
            class="btn btn__arrow search-item_link"
            >Согласование</router-link
          >
        </template>
        <template v-else>
          <div class="search-item_text">Согласование</div>
          <button class="btn btn__disable">Откроется с 3 уровня</button>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'

export default {
  name: 'Search',
  components: {
    Header
  },
  async created() {
    await this.$store.dispatch('UPDATE_USER_INFO')
  },
  mounted() {
    this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/search')
  }
}
</script>

<style lang="scss">
.search {
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-x: hidden;
  text-align: center;

  .search-wrapper {
    padding-top: 100px;
  }
  .search-item {
    margin-bottom: 20px;
  }
  .search-item_text {
    max-width: 215px;
    margin: 0 auto 5px;
    font-size: 12px;
    line-height: 13px;
    text-align: left;
  }
}
</style>
