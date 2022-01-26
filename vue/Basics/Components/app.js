Vue.component('counter', {
    data(){
        return{
            counter:0
        }
    },

    methods:{
        incrementCounter(){
            this.counter++
        }
    },

    template:`
        <div>
            <button v-on:click="incrementCounter">
                Click me!
            </button>
            <span>{{counter}}</span>
        </div>
    `
})

new Vue({
    el:'#app',

    data(){
        return {
            title: 'AFGZ'
        }
    }
})

