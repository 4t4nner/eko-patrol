<template>
  <div class="compact-event-card">
    <img
      class="card-icon"
      src="../assets/img/location-icon.png"
      alt="location icon"
    />
    <div class="card-content">
      <div class="card-content_item">
        {{ locationInfo.end_date.substr(0, 10) }}
      </div>
      <div class="card-content_item">{{ locationInfo.reward + 'б' }}</div>
      <div class="card-content_item">{{ locationInfo.org.login }}</div>
      <div class="card-content_item">
        {{
          Object.keys(locationInfo).length > 0 && locationInfo.subscribedUsers
            ? locationInfo.subscribedUsers.length + '/10'
            : 0 + '/10'
        }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CompactEventCard',
  props: {
    locationInfo: {
      type: Object,
      require: true
    }
  }
}
</script>

<style lang="scss">
.compact-event-card {
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 25px;

  .card-icon {
    margin-right: 20px;
  }
  .card-content {
    text-align: left;
  }
  .card-content_item {
    margin-bottom: 5px;
    font-size: 14px;
    line-height: 16px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}
</style>
