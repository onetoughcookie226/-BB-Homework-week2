//create a module named `ShoppingCart`. 
//The module must export a `class`, as its default export!

module.exports = class Cart {
    constructor(name, quantity, price) {
        // this.name = name;
        // this.quantity = quantity;
        // this.price = price;
        this.items = []
    }
    

    function addItem(name, quantity, price) {
        this.items.push("")
    }

    getItems() {
        // console.log(this.items)
        return this.items;
    }

  }



  //Create new Cart instance
//   const myCart = new Cart('', 2, 2);




// var shoppingCard = []
// cart.getItems()