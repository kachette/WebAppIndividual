var webstore = new Vue ({
    el:"#app",
    data: {
    
        products: products,
        showProduct: true,
        sitename: "Classes & Activities",

        order:{
            firstName: '',
            lastName: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            order: false,
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as a gift'
        },
            cart:[],
            states: {
                AL: 'Alabama',
                AR: 'Arizona',
                CA: 'California',
                NV: 'Nevada'
            }
    },
    computed: {
        sortedProducts(){
        function compare(a, b) {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0;
        }
    }

    },

    methods: {
        addToCart(product) {
            this.cart.push(product.id);
        },

        canAddToCart(product) {
            return product.availableInventory > this.cartCount(product.id);
        },

        cartCount(id) {
            let count = 0;
            for(let i = 0; i < this.cart.length; i++) {
                if(this.cart[i] === id) count++;
            }
            return count;
        },

        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },

        submitForm () {
            alert('Order Submitted !')}
        }
    
    }
)