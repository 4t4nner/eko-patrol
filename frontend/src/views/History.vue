<template>
  <div class="history">
    <Header />
    <div class="history-wrapper">
      <div class="history-title">Ваши завершенные ивенты</div>
      <compact-event-card />
      <compact-event-card />
      <compact-event-card />
      <compact-event-card />
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";
import CompactEventCard from "../components/CompactEventCard";

export default {
  name: 'History',
  components: {
    Header,
    CompactEventCard
  }
}
</script>

<style lang="scss">
.history {
  position: relative;
  height: calc(100vh - 60px);
  padding: 0 20px;
  overflow-x: hidden;
  text-align: center;

  .history-title {
    font-size: 18px;
    line-height: 20px;
  }
}
</style>