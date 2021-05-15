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
        <router-link
          to="/search/reconciliation"
          class="btn btn__arrow search-item_link"
          >Оценка</router-link
        >
      </div>
      <div class="search-item">
        <div class="search-item_text">Согласование</div>
        <button class="btn btn__disable">Откроется с 10 уровня</button>
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
  mounted() {
    this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/search')
  }
}
</script>

<style lang="scss">
.search {
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
