new Vue({
    el: '#app',

    data() {
        return {
            txt: '',
            color: '',

            boxes: [],

            box: {
                width: 0,
                height: 0,
                color: '',
                content: ''
            }

        }
    },

    computed: {},

    methods: {
        createBox(){
            let newBox = {
                width: parseInt(this.box.width),
                height: parseInt(this.box.height),
                color: this.box.color,
                content: this.box.content
            }
        }
    }
})