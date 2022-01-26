new Vue({
    el: '#app',

    data() {
        return {
            title: 'Course Tracker',
            noCourses: 'You have done no courses',

            courses: [],
            name: '',
            time: 0
        }
    },

    computed: {
        totalTime() {
            if (!this.courses.length) { return 0 }
            return this.courses.map(e => e.time).reduce((a, b) => a + b)
        }
    },

    methods: {
        addCourse() {
            if (!this.title || !this.time) { return }

            this.courses.push({
                name: this.name,
                time: parseInt(this.time)
            })

            this.name = ''
            this.time = 0
        }

    }
})