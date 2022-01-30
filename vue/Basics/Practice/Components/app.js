Vue.component('Modal', {
    data() {
        return {
            title: '',
        }
    },

    template:
        `
        <div>
            <h1>{{title}}</h1>
            <slot name="content"></slot>
            <button v-on:click="closeModal">
                Close Modal
            </button>
        </div>
    `,

    methods: {
        closeModal() {
            console.log('Close Modal is working')
            this.$emit('close')
        }
    }
})

new Vue({
    el: '#app',

    data() {
        return {
            showModal: false,
        }
    },

    methods: {
        toggleModal() {
            this.showModal = !this.showModal
        }
    }
})