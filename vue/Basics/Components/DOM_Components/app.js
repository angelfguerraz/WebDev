//Create a Component
Vue.component('coinDetail', {

  // The properties that the parent will send the children
  props: ['coin'],

  data() {
    return {
      showPrices: false,
      value: 0
    }
  },

  methods: {
    toggleShowPrices() {
      this.showPrices = !this.showPrices

      this.$emit('change-color')
    }
  },

  computed: {
    title() {
      return `${this.coin.name} - ${this.coin.symbol} `
    },
    convertedValue() {
      if (!this.value) {
        return 0
      }

      return this.value / this.coin.price
    }
  },

  template: `
  <div>
    <img 
      v-on:mouseover="toggleShowPrices" v-on:mouseout="toggleShowPrices" v-bind:src="coin.img" v-bind:alt="coin.name">

    <h1 
    v-bind:class="{
    orange: coin.changePercent === 0,
    red: coin.changePercent < 0,
    green: coin.changePercent > 0
    }"
    >
      {{title}}

      <!--v-if-->
      <span v-if="coin.changePercent > 0">👌🏾</span>
      <span v-else-if="coin.changePercent < 0">👎🏾</span>
      <span v-else>🤞🏾</span>

      <!--v-show-->
      <span v-show="coin.changePercent > 0">👌🏾</span>
      <span v-show="coin.changePercent < 0">👎🏾</span>
      <span v-show="coin.changePercent == 0">🤞🏾</span>
    </h1>

    <input type="number" v-model="value">
    <span>{{convertedValue}}</span>

    <slot name="text"></slot>
    <slot name="link"></slot>

    <ul v-show="showPrices">
      <h3>Display simple Array</h3>
      <li v-for="(p, i) in coin.pricesWithDays" v-bind:key="p">
        {{i}} -- {{p.day}} -- {{p.value}} 
      </li>
    </ul>

  </div>
  `
})

//Starts Vue Parent-Object
// Vue.js works as a 2-Date-Binding system paradigm
new Vue({
  el: '#app',

  // Properties that will be rendered
  data() {
    return {

      btc: {
        name: 'Bitcoin',
        symbol: 'BTC',
        img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
        price: 8500,
        changePercent: 4,
        pricesWithDays: [
          { day: 'Monday', value: 8500 },
          { day: 'Tuesday', value: 7900 },
          { day: 'Wednesday', value: 8200 },
          { day: 'Thursday', value: 9000 },
          { day: 'Friday', value: 9400 },
          { day: 'Saturday', value: 10000 },
          { day: 'Sunday', value: 10200 },
        ],

      },

      color: 'f4f4f4',
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],

      // by me
      counter: 0,
      isLightOn: true,
    }
  },

  // Computed Properties: Functions with a return value
  computed: {
    //insert computed parent properties
  },

  created(){
    console.log('Created...')
  },

  mounted(){
    console.log('Mounted...')
  },

  // Watchers: 
  watch: {
    // functions must have the same nave as a data-property
    showPrices(newValue, oldValue) {
      console.log(newValue, oldValue)
    }
  },

  // Event functions
  methods: {
    updateColor() {
      this.color = this.color.split('').reverse().join('')
    },

    increaseCounter() {
      this.counter++
    },

    changeBackground() {
      // split(''): Divides str in char-array
      // reverse(): Reverses array
      // join(''): Transform char-array into str
      this.color = this.color.split('').reverse().join('')
      this.isLightOn = !this.isLightOn
    }
  }
})