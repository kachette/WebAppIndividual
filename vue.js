var webstore = new Vue ({
    el:"#app",
    data: {
        showProduct: true,
        sitename: "Classes & Activities",
        cart:[],
        hideCart: false,
        states: {
            AL: 'Alabama',
            AR: 'Arizona',
            CA: 'California',
            NV: 'Nevada'
        },
        titleFilterAscending: false,
        titleFilterDescending: false,
        locationFilterAscending: false,
        locationFilterDescending: false,
        priceFilterAscending: false,
        priceFilterDescending: false
        ,
        
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
        products:{} 
    
    },
    created: function() {
        fetch('https://cw2app.herokuapp.com/').then(
            function (response) {
                response.json().then(
                    function (json) {
                        webstore.products = json;
                    });
                })
    },

    computed: {
        /// does not work
        sortedProduct(){
            function compare(a, b) {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
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
        },

        titleAscending() {
            function compare(a, b) {
                if (a.title > b.title) return 1;
                if (a.title < b.title) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },

        titleDescending() {
            function compare(a, b) {
                if (a.title > b.title) return -1;
                if (a.title < b.title) return 1;
                return 0;
            }
            return this.products.sort(compare);
        },

        locationAscending() {
            function compare(a, b) {
                if (a.location > b.location) return 1;
                if (a.location < b.location) return -1;
                return 0;
            }
            return this.products.sort(compare);
        },

        locationeDescending() {
            function compare(a, b) {
                if (a.location > b.location) return -1;
                if (a.location < b.location) return 1;
                return 0;
            }
            return this.products.sort(compare);
        },

        priceAscending() {
            return this.products.sort((a, b) => a.price - b.price );
        },
        priceDescending() {
            return this.products.sort((b, a) => a.price - b.price );
        },


        sortedProducts(){
            if(this.titleFilterDescending)
                return this.titleDescending;

            else if(this.titleFilterAscending)
                return this.titleAscending;

            else if(this.locationFilterAscending)
                return this.locationAscending;
            
            else if(this.locationFilterDescending)
                return this.locationeDescending;

            else if(this.priceFilterAscending)
                return this.priceAscending;

            else if(this.priceFilterDescending)
                return this.priceDescending;
            else
                return this.titleAscending;
            }
    },
        

    methods: {

        ///works fine
        addToCart(product) {
            return this.cart.push(product.id);
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