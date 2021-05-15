<template>
  <div class="profile">
    <Header />
    <div class="info-wrapper">
      <div class="info-inner">
        <div class="info-icon"></div>
        <div class="info-content">
          <div class="info-content_name">Имя</div>
          <div class="info-content-rating">
            <div class="info-content-starbar">
              <star-icon :fill="'#FCE38A'" class="info-content-starbar_icon" />
              <star-icon :fill="'#FCE38A'" class="info-content-starbar_icon" />
              <star-icon :fill="'#FCE38A'" class="info-content-starbar_icon" />
              <star-icon :fill="'#FCE38A'" class="info-content-starbar_icon" />
              <star-icon class="info-content-starbar_icon" />
            </div>
          </div>
        </div>
      </div>
      <div class="exp-wrapper">
        <div class="exp-bar-wrapper">
          <div class="exp-bar_text">3000/5000</div>
          <k-progress
            :percent="30"
            :color="'#F38181'"
            :bg-color="'#FCE38A'"
            :show-text="false"
            class="progress-bar_item"
          />
        </div>
        <div class="exp_text">04</div>
      </div>
    </div>
    <div class="active-event-wrapper">
      <div class="active-event-header">
        <button class="active-event-header_btn btn">Я участник</button>
        <button class="active-event-header_btn btn">Я организатор</button>
      </div>
      <div class="active-event-body">
        <div class="body-title">Текущие ивенты</div>
        <router-link to="/profile/1">
          <compact-event-card />
        </router-link>
        <router-link to="/profile/2">
          <compact-event-card />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header'
import StarIcon from '../components/svg/StarIcon'
import CompactEventCard from '../components/CompactEventCard'

export default {
  name: 'Profile',
  components: {
    Header,
    StarIcon,
    CompactEventCard
  },
  mounted() {
    this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/profile')
  }
}
</script>

<style lang="scss">
.profile {
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-x: hidden;
  text-align: center;

  .info-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-icon {
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
    background: #c4c4c4;
  }
  .info-content_name {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 10px;
  }
  .info-content-rating {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .info-content-starbar_icon {
    margin-right: 3px;

    &:last-child {
      margin-right: 5px;
    }
  }
  .info-content_rating {
    font-size: 14px;
    line-height: 16px;
  }
  .exp-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 30px;
  }
  .exp-bar-wrapper {
    margin-right: 10px;
  }
  .exp-bar_text {
    margin: 0 auto 5px;
    font-size: 14px;
    line-height: 16px;
    text-align: right;
  }
  .progress-bar_item,
  .exp-bar_text {
    width: 215px;
  }
  .progress-bar_item {
    margin-right: 0;
  }
  .k-progress-outer {
    padding-right: 0 !important;
  }
  .exp_text {
    font-size: 36px;
    line-height: 42px;
  }
  .active-event-header {
    display: flex;
    justify-content: center;
  }
  .active-event-header {
    margin-bottom: 45px;
  }
  .active-event-header_btn {
    width: 135px;
    padding: 10px 15px;
    margin-right: 35px;

    &:last-child {
      margin-right: 0;
    }
  }
  .body-title {
    position: relative;
    font-size: 14px;
    line-height: 16px;
    white-space: nowrap;

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      left: -85%;
      transform: translateY(-50%);
      width: 100%;
      height: 0.5px;
      background: #232323;
    }
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      right: -85%;
      transform: translateY(-50%);
      width: 100%;
      height: 0.5px;
      background: #232323;
    }
  }
}
</style>
