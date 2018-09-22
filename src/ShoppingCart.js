//create a module named `ShoppingCart`. 
//The module must export a `class`, as its default export!



module.exports = class ShoppingCart {
    constructor(name, quantity, price) {
        // this.name = name;
        // this.quantity = quantity;
        // this.price = price;
        this.items = []
    }
    
    function addItem(name, quantity, price) {
       return this.items.push()
    }

    getItems() {
        // console.log(this.items)
        return this.items
    }

    cart.clear() {

    }

}

  //Create new Cart instance
//   const myCart = new Cart('', 2, 2);



// var shoppingCard = []
// cart.getItems()
