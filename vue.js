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
            image:"images/index.png",
            availableInventory: 5,
        },
        cart:[]
    },
    methods: {
        addToCart: function() {
            this.cart.push( this.product.id)
            
            },
            showCheckout() {
                this.showProduct = this.showProduct ? false : true;
        }
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