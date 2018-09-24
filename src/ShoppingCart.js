//create a module named `ShoppingCart`. 
//The module must export a `class`, as its default export!



module.exports = class ShoppingCart {
    constructor(name, quantity, price) {
        // this.name = name;
        // this.quantity = quantity;
        // this.price = price;
        this.items = []
    }
    
    addItem(name, quantity, price) {

        const newItem = {
            name: name,
            quantity: quantity,
            pricePerUnit: price,
        }
    return this.items.push(newItem)
    };

    getItems() {
        // console.log(this.items)
        return this.items
    }

    clear() {
        this.items= []

    }
    
    total() {

    }

}

  //Create new Cart instance
//   const myCart = new Cart('', 2, 2);



// var shoppingCard = []
// cart.getItems()
