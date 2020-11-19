var webstore = new Vue ({
    el:"#app",
    data: {
    
        products: products,
        showProduct: true,
        sitename: "Classes & Activities",

        order:{
            firstName: '',
            lastName: '',
            phone: '',
            address: '',
            city: '',
            zip: '',
            state: '',
            method: 'Home',
            gift: 'Do not send as a gift.',
            order: false,
            sendGift: 'Send as a gift',
            dontSendGift: 'Do not send as a gift'
        },
            cart:[],
            hideCart: false,
            states: {
                AL: 'Alabama',
                AR: 'Arizona',
                CA: 'California',
                NV: 'Nevada'
            },
            checkedFilters: [],
            

    },
    computed: {
        /// does not work
        sortedProducts(){
            function compare(a, b) {
                if (a.location > b.location) return 1;
                if (a.location < b.location) return -1;
                return 0;
            }
            return this.products.sort(compare)
        },

        ///works but treats phone as a main component
        isDisable() {
            return this.nameValid , this.phoneValid;
            
        },

        ///works fine
        nameValid() {
            return /^[A-Za-z]+$/.test(this.order.firstName);
        },

        ///works fine
        phoneValid() {
            return /^[0-1-2-3-4-5-6-7-8-9-+]+$/.test(this.order.phone);
        },
        isHideCart () {
                return this.cart.length >0;
        }

    },
        

    methods: {

        ///works fine
        addToCart(product) {
            this.cart.push(product.id);
        },

        ///woking fine
        canAddToCart(product) {
            return product.availableInventory > this.cartCount(product.id);
        },

        ///works fine
        cartCount(id) {
            let count = 0;
            for(let i = 0; i < this.cart.length; i++) {
                if(this.cart[i] === id) count++;
            }
            return count;
        },

        ///works fine
        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },

        ///works fine
        submitForm () {
            alert('Order Submitted !')
        }
    }
})