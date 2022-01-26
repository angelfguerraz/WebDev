//Starts Vue Object
// Vue.js works as a 2-Date-Binding system paradigm
new Vue({
  el: '#app',

  // Properties that will be rendered
  data() {
    return {
      name: 'Bitcoin',
      symbol: 'BTC',
      img: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
      changePercent: 4,
      prices: [8400, 7900, 8200, 9000, 9400, 10000, 10200],
      pricesWithDays: [
        { day: 'Monday', value: 8500 },
        { day: 'Tuesday', value: 7900 },
        { day: 'Wednesday', value: 8200 },
        { day: 'Thursday', value: 9000 },
        { day: 'Friday', value: 9400 },
        { day: 'Saturday', value: 10000 },
        { day: 'Sunday', value: 10200 },
      ],

      showPrices: false,
      counter: 0,
      price: 8500,
      color: 'f4f4f4',
      isLightOn: true,
      value: 0,
    }
  },

  // Computed Properties: Functions with a return value
  computed: {
    title() {
      return `${this.name} - ${this.symbol} `
    },

    convertedValue() {
      if (!this.value) {
        return 0
      }

      return this.value / this.price
    }
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
    toggleShowPrices() {
      this.showPrices = !this.showPrices

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