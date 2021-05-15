<template>
  <div class="compact-event-card">
      <div class="card-icon"></div>
      <div class="card-content">
        <div class="card-content_item">{{ locationInfo.end_date.substr(0, 10) }}</div>
        <div class="card-content_item">{{ locationInfo.reward + 'б' }}</div>
        <div class="card-content_item">{{ locationInfo.org.login }}</div>
        <div class="card-content_item">9/10</div>
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
    width: 100px;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
    background: #c4c4c4;
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