<template>
  <div class="comments">
    <Header />
    <div class="comments-wrapper">
      <div class="comment-title">Комментарии</div>
      <div class="comment-item">
        <div class="comment-header">
          <img class="comment-header_icon" src="../assets/img/user-icon.png" alt="user icon">
          <div class="comment-header-title">
            <div class="comment-header-title_text">Панда Пандини</div>
            <div class="comment-header-title_date">20 часов назад</div>
          </div>
        </div>
        <div class="comment-content">
          <div class="comment-content_text">Убрал мусор!</div>
        </div>
      </div>
      <div class="comment-item">
        <div class="comment-header">
          <img class="comment-header_icon" src="../assets/img/user-icon.png" alt="user icon">
          <div class="comment-header-title">
            <div class="comment-header-title_text">Панда Пандини</div>
            <div class="comment-header-title_date">20 часов назад</div>
          </div>
        </div>
        <div class="comment-content">
          <div class="comment-content_text">Убрал мусор!</div>
        </div>
      </div>
      <div class="comment-item">
        <div class="comment-header">
          <img class="comment-header_icon" src="../assets/img/user-icon.png" alt="user icon">
          <div class="comment-header-title">
            <div class="comment-header-title_text">Панда Пандини</div>
            <div class="comment-header-title_date">20 часов назад</div>
          </div>
        </div>
        <div class="comment-content">
          <div class="comment-content_text">Убрал мусор!</div>
        </div>
      </div>
      <div class="comment-item">
        <div class="comment-header">
          <img class="comment-header_icon" src="../assets/img/user-icon.png" alt="user icon">
          <div class="comment-header-title">
            <div class="comment-header-title_text">Панда Пандини</div>
            <div class="comment-header-title_date">20 часов назад</div>
          </div>
        </div>
        <div class="comment-content">
          <div class="comment-content_text">Убрал мусор!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../components/Header";

export default {
  name: 'Comments',
  components: {
    Header
  }
}
</script>

<style lang="scss">
.comments {
  min-height: 440px;
  height: calc(100vh - 60px);
  padding: 0 20px;
  background: url("../assets/img/comments-bg.svg") top center no-repeat;
  background-size: cover;
  overflow-x: hidden;
  text-align: center;

  .comment-title {
    font-size: 18px;
    line-height: 20px;
    margin-bottom: 30px;
  }
  .comment-item {
    margin-bottom: 15px;
  }
  .comment-header {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    align-items: center;
    font-size: 12px;
    line-height: 13px;
  }
  .comment-header_icon {
    width: 45px;
    margin-right: 10px;
  }
  .comment-header-title {
    padding-top: 10px;
  }
  .comment-content {
    position: relative;
    width: 300px;
    padding: 10px 15px;
    margin: 0 auto;
    border: 1px solid #000000;
    border-radius: 50px;
    text-align: left;

    &:after {
      position: absolute;
      content: '';
      top: 50%;
      right: 15px;
      transform: translateY(-50%);
      width: 17px;
      height: 17px;
      background: url('../assets/img/comment-icon.svg') top center no-repeat;
      background-size: cover;
    }
  }
}
</style>