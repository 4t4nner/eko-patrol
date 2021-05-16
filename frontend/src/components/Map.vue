<template>
  <div id="map" class="map"></div>
</template>

<script>
export default {
  name: 'Map',
  data() {
    return {
      map: null,
      coords: [],
      ymaps: window.ymaps
    }
  },
  mounted() {
    this.ymaps.ready(this.init)
  },
  methods: {
    addMarker(val) {
      this.map.geoObjects.add(
          new this.ymaps.Placemark(
              val,
              {
                balloonContent: '<strong>серобуромалиновый</strong> цвет'
              },
              {
                preset: 'islands#dotIcon',
                iconColor: '#735184'
              }
          )
      )
    },
    init() {
      var _this = this
      this.map = new this.ymaps.Map(
        'map',
        {
          center: [53.355695537367104, 83.76994799999997],
          zoom: 11
        },
        {
          balloonMaxWidth: 200,
          searchControlProvider: 'yandex#search'
        }
      )

      if (this.$route.name === 'Offer') {
        this.map.events.add('click', function (e) {
          if (!_this.map.balloon.isOpen()) {
            const coords = e.get('coords')
            _this.coords = coords
            _this.map.balloon.open(coords, {
              contentHeader: 'Событие!',
              contentBody:
                  '<p>Координаты щелчка: ' +
                  [coords[0].toPrecision(6), coords[1].toPrecision(6)].join(', ') +
                  '</p>',
              contentFooter:
                  '<sup>Щелкните еще раз, чтоб изменить координаты</sup>'
            })
          } else {
            _this.map.balloon.close()
          }
        })
      }
      if (Object.keys(this.$store.getters.activeLocationInfo).length > 0) {
        this.addMarker(this.$store.getters.activeLocationInfo.geotag)
      }
    }
  },
  watch: {
    coords(val) {
      this.$emit('setCoords', val)
      this.addMarker(val)
    }
  }
}
</script>

<style lang="scss">
.map {
  width: 100%;
  height: 305px;
  background: #c2c2c2;
}
</style>
