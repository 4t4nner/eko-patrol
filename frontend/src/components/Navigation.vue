<template>
  <div class="navigation">
    <div class="navigation-wrapper">
      <div class="navigation-item navigation-item__active">
        <router-link to="/profile" class="navigation-item_link">
          <img src="../assets/img/profile-icon.svg" alt="icon" class="navigation-item_icon">
          <div class="navigation-item_text">Профиль</div>
        </router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/search" class="navigation-item_link">
          <img src="../assets/img/search-icon.svg" alt="icon" class="navigation-item_icon">
          <div class="navigation-item_text">Поиск</div>
        </router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/history" class="navigation-item_link">
          <img src="../assets/img/history-icon.svg" alt="icon" class="navigation-item_icon">
          <div class="navigation-item_text">История</div>
        </router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/offer" class="navigation-item_link">
          <img src="../assets/img/offer-icon.svg" alt="icon" class="navigation-item_icon">
          <div class="navigation-item_text">Предложить</div>
        </router-link>
      </div>
      <div class="navigation-item">
        <router-link to="/shop" class="navigation-item_link">
          <img src="../assets/img/shop-icon.svg" alt="icon" class="navigation-item_icon">
          <div class="navigation-item_text">Магазин</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import "src/assets/styles/variables";

.navigation {
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  height: 60px;
  padding: 8px 15px 10px;
  background: $yellow;
  text-align: center;
}
.navigation-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-top: -10px;
}
.navigation-item__active {
  position: relative;

  &:before {
    position: absolute;
    content: '';
    width: 65px;
    height: 65px;
    top: -14px;
    left: 50%;
    transform: translateX(-50%);
    background: $yellow;
    border-radius: 50%;
    z-index: -1;
  }

  & .navigation-item_icon {
    width: 40px;
  }
}
</style>