new Vue({
    el: '#app',

    data() {
        return {

            name: 'Angel',
            framework: 'Vue',
            message: `You loaded this page on ${new Date().toLocaleString()}`,

            boxes: [1, 2, 3, 4, 5],
            colors: ['blue', 'green', 'yellow', 'orange', 'red'],

            color: 'FFE4E1',
            darkModeOn: false,

            obj: {
                name: 'Angel',
                age: 23,
                student: true
            },

            boxes_obj: [
                { id: 1, content: 1 },
                { id: 2, content: 2 },
                { id: 3, content: 3 },
                { id: 4, content: 4 },
                { id: 5, content: 5 },
            ],

            numberOfBoxes: 1,

            changeBox: 1,

            showBox: false

        }
    },

    // This functions always return a value
    computed: {
        intro() {
            return `Hello ${this.name}, Welcome back to ${this.framework}`
        }
    },

    methods: {
        toggleBox() {
            this.showBox = !this.showBox
        },

        darkMode() {
            this.darkModeOn = !this.darkModeOn
            this.color = this.color.split('').reverse().join('')
        },

        

        
    }
})