<template>
  <div class="event-card">
    <div class="card-header">
      <img class="card-header-img" src="../assets/img/location-icon2.png" alt="location icon">
      <div class="card-header-info">
        <input-text
          @inputText="inputDateHandler"
          :label="'Дата'"
          :name="'date'"
          :isSmall="true"
          :type="'date'"
          :readOnly="isReadOnlyRewardInput"
          :defaultValue="Object.keys(this.$store.getters.activeLocationInfo).length > 0 ? $store.getters.activeLocationInfo.end_date.substr(0, 10) : ''"
        />
        <input-text
          v-if="isVisibleOrganizedInput"
          @inputText="inputOrganizedHandler"
          :label="'Организатор'"
          :name="'organizer'"
          :isSmall="true"
          :readOnly="true"
          :defaultValue="Object.keys(this.$store.getters.activeLocationInfo).length > 0 ? $store.getters.activeLocationInfo.org.login : ''"
        />
        <input-text
          @inputText="inputRewardHandler"
          :label="'Награда'"
          :type="'number'"
          :name="'reward'"
          :isSmall="true"
          :readOnly="isReadOnlyRewardInput"
          :defaultValue="Object.keys(this.$store.getters.activeLocationInfo).length > 0 ? String(this.$store.getters.activeLocationInfo.reward) : ''"
        />
      </div>
    </div>
    <div class="card-body">
      <div class="card-body-item">
        <div class="card-body-item_text">Площадь:</div>
        <div class="card-body-item_value">
          {{ sliderValue + 'м' }}<sup><small>2</small></sup>
        </div>
        <range-slider
          v-model="sliderValue"
          class="slider"
          :disabled="isDisabledRangeSlider"
          min="10"
          max="50"
          step="1"
        >
        </range-slider>
      </div>
      <div class="card-body-item">
        <div class="card-body-item_text">Доступность:</div>
        <custom-select @input="inputSelectedHandler" :options="selectOptions" :default="Object.keys(this.$store.getters.activeLocationInfo).length > 0 ? String(this.$store.getters.activeLocationInfo.availability) : ''"/>
      </div>
      <div class="card-body-item card-body-item__flex-start">
        <div class="card-body-item_text">Уровень загрязнения:</div>
        <custom-radio-buttons @input="radioHandler" :options="radioOptions" :default="Object.keys(this.$store.getters.activeLocationInfo).length > 0 ? Number(this.$store.getters.activeLocationInfo.contamination) : 0"/>
      </div>
      <div class="input input__small input-comment">
        <router-link to="/comments" class="input_label input_label__link"
          >Комментарии</router-link
        >
        <input
          v-if="isVisibleCommentInput"
          v-model="comment"
          type="text"
          name="comment"
          class="input_item"
          placeholder="Введите комментарий и нажмите Enter"
          @keypress.enter="sendCommentHandler"
        />
        <div class="input-comment__send-btn"></div>
      </div>
    </div>
    <div class="card-body-footer">
      <button
        @click="addLocationHandler"
        class="card-body-footer_btn btn"
        v-if="isVisibleOfferButton"
      >
        Предложить
      </button>
      <button class="card-body-footer_btn btn" v-if="isVisibleJoinButton">
        Присоединиться
      </button>
    </div>
  </div>
</template>

<script>
import InputText from './customElements/InputText'
import CustomSelect from './customElements/CustomSelect'
import CustomRadioButtons from './customElements/CustomRadioButtons'

import RangeSlider from 'vue-range-slider'
import 'vue-range-slider/dist/vue-range-slider.css'

export default {
  name: 'EventCard',
  components: {
    InputText,
    CustomSelect,
    CustomRadioButtons,
    RangeSlider
  },
  data() {
    return {
      sliderValue: 10,
      selectOptions: [
        'В шаговой доступности',
        'Близко от остановок общ. трансп-та',
        'Требуется наличие личного авто'
      ],
      radioOptions: [
        {
          id: 'one',
          value: 1
        },
        {
          id: 'two',
          value: 2
        },
        {
          id: 'Three',
          value: 3
        },
        {
          id: 'four',
          value: 4
        },
        {
          id: 'five',
          value: 5
        }
      ],
      comment: ''
    }
  },
  computed: {
    isVisibleCommentInput() {
      return this.$route.name !== 'History id'
    },
    isVisibleJoinButton() {
      return this.$route.name === 'Search locations id'
    },
    isDisabledRangeSlider() {
      return this.$route.name !== 'Offer' ? 'disabled' : false
    },
    isVisibleOfferButton() {
      return this.$route.name === 'Offer'
    },
    isVisibleOrganizedInput() {
      return this.$route.name !== 'Offer'
    },
    isReadOnlyRewardInput() {
      return this.$route.name !== 'Offer'
    }
  },
  mounted() {
    if (Object.keys(this.$store.getters.activeLocationInfo).length > 0) {
      this.sliderValue = this.$store.getters.activeLocationInfo.square

    }
  },
  methods: {
    addLocationHandler() {
      this.$emit('addLocationHandler')
    },
    inputSelectedHandler(val) {
      this.$emit('inputSelected', val)
    },
    radioHandler(val) {
      this.$emit('inputRadio', val)
    },
    sendCommentHandler() {
      this.comment = ''
    },
    inputDateHandler(val) {
      this.$emit('inputDate', val)
    },
    inputOrganizedHandler(val) {
      this.$emit('inputOrganized', val)
    },
    inputRewardHandler(val) {
      this.$emit('inputReward', val)
    }
  },
  watch: {
    sliderValue(val) {
      this.$emit('inputSlider', val)
    }
  }
}
</script>

<style lang="scss">
@import '../assets/styles/variables';

.event-card {
  padding: 15px 20px;

  .card-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 15px;
  }
  .card-header-img {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 100px;
    width: 100%;
    height: 100px;
    margin-right: 20px;
    border-radius: 50%;
    background: #c4c4c4;
    font-size: 12px;
    line-height: 14px;
  }
  .card-header-info {
    width: 100%;
  }
  .card-body {
    margin-bottom: 20px;
  }
  .card-body-item {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
  }
  .card-body-item_text,
  .card-body-item_value {
    font-size: 12px;
    line-height: 14px;
  }
  .card-body-item_text {
    margin-right: 5px;
    white-space: nowrap;
  }
  .card-body-item__flex-start {
    align-items: flex-start;
  }
  .card-body-item_value {
    margin-right: 15px;
  }
  .range-slider {
    width: 100%;
  }
  .card-body-item_select {
    width: 100%;
  }
  .card-body-footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-body-footer_btn {
    width: auto;
    padding: 9px 10px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
  .range-slider-knob {
    background-color: $yellow;
  }
  .range-slider-rail {
    background-color: $red;
  }
  .custom-radio-item {
    margin-bottom: 10px;
  }
  .custom-radio-item input[type=radio] {
    display: none;
  }
  .custom-radio-item label {
    display: inline-block;
    cursor: pointer;
    position: relative;
    padding-left: 5px;
    margin-right: 0;
    padding-top: 15px;
    line-height: 18px;
    user-select: none;
  }
  .custom-radio-item label:before {
    content: "";
    display: inline-block;
    width: 17px;
    height: 18px;
    position: absolute;
    left: 0;
    top: 1px;
    background: url('../assets/img/radio2.png') 0 0 no-repeat;
  }

  /* Checked */
  .custom-radio-item input[type=radio]:checked + label:before {
    background: url('../assets/img/radio1.png') 0 0 no-repeat;
  }

  /* Hover */
  .custom-radio-item label:hover:before {
    filter: brightness(120%);
  }

  /* Disabled */
  .custom-radio-item input[type=radio]:disabled + label:before {
    filter: grayscale(100%);
  }
}
</style>
