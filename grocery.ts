class grocery{
    myCart: string;
    constructor(public firstItem : string, public firstQuatity : number, public secondItem: string, public secondQuatity: number) {
        this.myCart = firstItem  + " " + firstQuatity + " " + secondItem + " " + secondQuatity;
    }
}

interface Item {
    firstItem: string;
    firstQuatity: number;
    secondItem: string;
    secondQuatity: number;
}

function greeter(item : Item) {
    return "My Grocery Cart Has " + item.firstQuatity+ " " + item.firstItem + " "+ "And"+ " " + item.secondQuatity + " " +item.secondItem   
}

let cart = new grocery("Milk", 1, "Banana",4);

document.body.innerHTML = greeter(cart);