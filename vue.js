var webstore = new Vue ({
    el:"#app",
    data: {
        showProduct: true,
        sitename: "Classes & Activities",

        product:{
            id:1001,
            title:"Maths Class",
            description:"An outstanding class" + " not taught by Gabriel",
            price:20,
            image:"images/product.png",
            availableInventory: 5,
            rating: 5
        },
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
            cart:[]
    },
    methods: {
        addToCart: function() {
            this.cart.push( this.product.id)
        },

        showCheckout() {
            this.showProduct = this.showProduct ? false : true;
        },

        submitForm() {alert('Order Submitted !')}
    
        },
        computed: {
        cartItemCount: function() {
            return this.cart.length || '';
    },
        canAddToCart: function() {
            return this.product.availableInventory > this.cartItemCount;
        }
    }
})