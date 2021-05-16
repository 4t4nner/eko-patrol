<template>
  <div class="profile">
    <Header />
    <div class="info-wrapper">
      <div class="info-inner">
        <img class="info-icon" src="../assets/img/user-icon.png" alt="user icon">
        <div class="info-content">
          <div class="info-content_name">
            {{ $store.getters.profileInfo.login }}
          </div>
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
          <div class="exp-bar_text">
            {{ $store.getters.profileInfo.rating }}/1000
          </div>
          <k-progress
            :percent="$store.getters.profileInfo.rating * 100 / 1000"
            :color="'#F38181'"
            :bg-color="'#FCE38A'"
            :show-text="false"
            class="progress-bar_item"
          />
        </div>
        <div class="exp_text">{{ $store.getters.profileInfo.level }}</div>
      </div>
    </div>
    <div class="active-event-wrapper">
      <div class="active-event-header">
        <button
          @click="changeActiveTab('participant')"
          :class="{
            'active-event-header_btn__active':
              activeCurrentLocationTab === 'participant'
          }"
          class="active-event-header_btn btn"
        >
          Я участник
        </button>
        <button
          @click="changeActiveTab('org')"
          :class="{
            'active-event-header_btn__active':
              activeCurrentLocationTab === 'org'
          }"
          class="active-event-header_btn btn"
        >
          Я организатор
        </button>
      </div>
      <div class="active-event-body">
        <div
          v-if="
            participantCurrentLocation.length === 0 &&
            orgCurrentLocation.length === 0
          "
          class="body-title"
        >
          Нет активных локаций
        </div>
        <div v-else class="body-title">Текущие локации</div>
        <template
          v-if="
            activeCurrentLocationTab === 'participant' &&
            participantCurrentLocation.length > 0
          "
        >
          <router-link
            v-for="location of participantCurrentLocation"
            :key="location.id"
            :to="`/profile/${location.id}`"
          >
            <compact-event-card :locationInfo="location" />
          </router-link>
        </template>
        <template
          v-if="
            activeCurrentLocationTab === 'org' && orgCurrentLocation.length > 0
          "
        >
          <router-link
            v-for="location of orgCurrentLocation"
            :key="location.id"
            :to="`/profile/${location.id}`"
          >
            <compact-event-card :locationInfo="location" />
          </router-link>
        </template>
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
  data() {
    return {
      activeCurrentLocationTab: 'participant'
    }
  },
  computed: {
    participantCurrentLocation() {
      return this.$store.getters.currentLocations.filter(
        (location) => location.org.id !== this.$store.getters.profileInfo.id && location.subscribedUsers && location.subscribedUsers.some(user => user.id === this.$store.getters.profileInfo.id) && location.status === 'active'
      )
    },
    orgCurrentLocation() {
      return this.$store.getters.currentLocations.filter(
        (location) => location.org.id === this.$store.getters.profileInfo.id && (location.status === 'active' || location.status === 'prepare')
      )
    }
  },
  async created() {
    await this.$store.dispatch('GET_LOCATIONS')
    await this.$store.dispatch('UPDATE_USER_INFO')
  },
  mounted() {
    this.$store.commit('SET_ACTIVE_ROOTE_PAGE', '/profile')
  },
  methods: {
    changeActiveTab(param) {
      this.activeCurrentLocationTab = param
    }
  }
}
</script>

<style lang="scss">
.profile {
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px 20px;
  background: url('../assets/img/registration-bg.svg') top center no-repeat;
  background-size: cover;
  overflow-x: hidden;
  text-align: center;

  .info-inner {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .info-icon {
    width: 100px;
    margin-right: 20px;
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
    padding: 10px 15px;
    margin-right: 35px;
    white-space: nowrap;

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
  .active-event-header_btn__active {
    background: #FFCF25;
  }
}
</style>
