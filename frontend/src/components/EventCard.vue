<template>
  <div class="event-card">
    <div class="card-header">
      <div class="card-header-img">Добавить фото</div>
      <div class="card-header-info">
        <input-text :label="'Награда'" :name="'reward'" :isSmall="true" />
      </div>
    </div>
    <div class="card-body">
      <div class="card-body-item">
        <div class="card-body-item_text">Площадь:</div>
        <div class="card-body-item_value">
          {{ sliderValue + 'м' }}<sup><small>2</small></sup>
        </div>
        <range-slider
          class="slider"
          min="10"
          max="50"
          step="1"
          v-model="sliderValue"
        >
        </range-slider>
      </div>
      <div class="card-body-item">
        <div class="card-body-item_text">Доступность:</div>
        <custom-select @input="inputHandler" :options="selectOptions" />
      </div>
      <div class="card-body-item card-body-item__flex-start">
        <div class="card-body-item_text">Уровень загрязнения:</div>
        <custom-radio-buttons @input="radioHandler" :options="radioOptions" />
      </div>
    </div>
    <div class="card-body-footer">
      <button class="card-body-footer_btn btn">Предложить</button>
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
      selected: '',
      selectOptions: [
        'В шаговой доступности',
        'Близко от остановок общ. трансп-та',
        'Требуется наличие личного авто'
      ],
      radioSelect: '',
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
      ]
    }
  },
  methods: {
    inputHandler(val) {
      this.selected = val
    },
    radioHandler(val) {
      this.radioSelect = val
    }

  }
}
</script>

<style lang="scss">
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
    width: 115px;
    padding: 9px 10px;
    margin-right: 20px;

    &:last-child {
      margin-right: 0;
    }
  }
}
</style>
