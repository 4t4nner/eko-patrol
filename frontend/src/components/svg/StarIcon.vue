<template>
  <svg
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="22px"
    height="22px"
    x="0px"
    y="0px"
    viewBox="0 0 426.667 426.667"
    style="enable-background: new 0 0 426.667 426.667"
    xml:space="preserve"
  >
    <polygon
      :style="{'fill': fill}"
      points="213.333,10.441 279.249,144.017 426.667,165.436 320,269.41 345.173,416.226 213.333,346.91 
	81.485,416.226 106.667,269.41 0,165.436 147.409,144.017 "
    />
  </svg>
</template>

<script>
export default {
  name: 'StarIcon',
  props: {
    fill: {
      type: String,
      require: false,
      default: '#c4c4c4'
    }
  }
}
</script>
