export default class DB{

  static setApiUrl(url){
    this.apiUrl = url;
  }

  static async findAll(){
    const response = await fetch(this.apiUrl + "products");
    return response.json();
  }
  
  static deleteOneById(itemCart){
    localStorage.setItem('cartItems', JSON.stringify(itemCart))
  }


  static createNewItem(itemCart) {
    localStorage.setItem('cartItems', JSON.stringify(itemCart))
  }

  static updateQuantity(itemCart){
    localStorage.setItem('cartItems', JSON.stringify(itemCart))
  }

  static resetCart(itemCart){
    localStorage.setItem('cartItems', JSON.stringify(itemCart))
  }
}