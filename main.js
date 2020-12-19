const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        addCart(id) {
            this.cart.push(id)
        },
        removeCart(id) {
            const index = this.cart.lastIndexOf(id)
            if (index > -1) {
                this.cart.splice(index, 1);
            }
        },
    }
})
