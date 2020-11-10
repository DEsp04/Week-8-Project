//create product class which has a price id, and quantity on hand
class Inventory { 
  constructor(price) { 
    this.items = [];
    this.price = price
  }

  add(item = null) { 
    const itemName = item;
    const price = this.price;
    const quantity = this.quantity;

    if (item !== null) { 
      this.items.push({
        item: itemName,
        price: price,
        quantity: quantity
      });
    }
  }

  remove(item) { 
    for (let i = 0; i < this.items.length; i++) {
      for (let key in this.items[i]) {
        if (this.items[i][key] === item) { 
          delete this.items[i][key];
        }
      }
    }
  }
}

class Product extends Inventory { 
  constructor(price, quantity) { 
    super(price);
    this.quantity = quantity;
  }
}






//Inventory will get Product's properties

let schoolSupplies = new Product();

schoolSupplies.quantity = 10;
// 10
schoolSupplies.price = 1.25;
// 1.25
schoolSupplies.add('Pencils');

schoolSupplies.items;
//[{…}]0: {item: "Pencils", price: 1.25, quantity: 10}length: 1__proto__: Array(0)

//----------------------------------------------------------

schoolSupplies.quantity = 3;
// 3
schoolSupplies.price = 5.00
// 5
schoolSupplies.add('NoteBooks');

schoolSupplies.items;
/*[{…}, {…}]
0: {item: "Pencils", price: 1.25, quantity: 10}
1: {item: "NoteBooks", price: 5, quantity: 3}
*/