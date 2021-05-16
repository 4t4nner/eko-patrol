<template>
  <div class="navigation">
    <div class="navigation-wrapper">
      <div v-for="(item, idx) of navigationList" :key="`navigation-item-${idx}`" :class="{'navigation-item__active': isActiveItem(item)}" class="navigation-item" >
        <a @click.prevent="linkHandler(item.link)" class="navigation-item_link">
          <img
            :src="require(`../assets/img/${item.icon}`)"
            alt="icon"
            class="navigation-item_icon"
          />
          <div class="navigation-item_text">{{ item.title }}</div>
        </a>
      </div>
    </div>
    <a v-if="isVisiblePrevLink" @click="handler" class="prev-page" />
  </div>
</template>

<script>
export default {
  name: 'Navigation',
  data() {
    return {
      navigationList: [
        {
          link: '/profile',
          icon: 'profile-icon.svg',
          title: 'Профиль'
        },
        {
          link: '/search',
          icon: 'search-icon.svg',
          title: 'Поиск'
        },
        {
          link: '/offer',
          icon: 'offer-icon.svg',
          title: 'Предложить'
        },
        {
          link: '/history',
          icon: 'history-icon.svg',
          title: 'История'
        },
        {
          link: '/shop',
          icon: 'shop-icon.svg',
          title: 'Магазин'
        }
      ]
    }
  },
  computed: {
    isVisiblePrevLink() {
      return (
        this.$route.name === 'Profile location id' ||
        this.$route.name === 'Search locations' ||
        this.$route.name === 'Search locations id' ||
        this.$route.name === 'Search reconciliation' ||
        this.$route.name === 'Search reconciliation id' ||
        this.$route.name === 'Search appraisal' ||
        this.$route.name === 'Search appraisal id' ||
        this.$route.name === 'History id' ||
        this.$route.name === 'Comments'
      )
    }
  },
  methods: {
    linkHandler(link) {
      if (this.$route.path === link) {
        return
      }
      if (link === '/offer') {
        this.$router.push('/clear')
      } else {
        this.$router.push(link)
      }
    },
    isActiveItem(item) {
      return this.$store.getters.activeRootePage === item.link
    },
    handler() {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang="scss">
@import 'src/assets/styles/variables';

.navigation {
  position: fixed;
  bottom: 0;
  max-width: 425px;
  width: 100%;
  height: 60px;
  padding: 8px 15px 10px;
  background: $yellow;
  text-align: center;

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
  .prev-page {
    position: absolute;
    bottom: 100px;
    left: -25px;
    width: 45px;
    height: 45px;
    background: $yellow;
    border-radius: 50%;
    cursor: pointer;

    &:before {
      position: absolute;
      content: '';
      top: 50%;
      transform: translate(-50%, -50%);
      left: 75%;
      width: 11px;
      height: 1px;
      background: #000;
    }
    &:after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translate(-50%, -50%) rotate(-135deg);
      left: 69%;
      width: 5px;
      height: 5px;
      border-top: 1px solid #000;
      border-right: 1px solid #000;
    }
  }
}
</style>
