new Vue({
    el: '#app',

    data() {
        return {
            txt: '',
            color: '',
            nBoxes: 0,

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
        createBoxes() {
            for (var i = 0; i < parseInt(this.nBoxes); i++) {
                this.createBox()

            }
        },

        createBox() {
            let newBox = {
                width: parseInt(this.box.width),
                height: parseInt(this.box.height),
                color: this.box.color,
                content: this.box.content
            }

            this.boxes.push(newBox)
        }
    }
})