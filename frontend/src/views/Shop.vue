<template>
  <div class="shop">
    <Header />
    <div class="shop-wrapper">
      <div class="shop-title">Магазин пока пуст :(</div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: 'Shop',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.shop {
  position: relative;
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  background: url("../assets/img/shop-bg.svg") top center no-repeat;
  background-size: cover;
  overflow-x: hidden;
  text-align: center;

  .shop-title {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>