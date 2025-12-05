export default class DB{

  static setApiUrl(url){
    this.apiUrl = url;
  }

  static async findAll(){
    const response = await fetch(this.apiUrl + "products");
    return response.json();
  }
  
  static async deleteOneById(id){
    const response = await fetch(this.apiUrl+"products/"+id,{
      method:"DELETE"
    });
    return response.json();
  }


  static createNewItem(products) {
    localStorage.setItem('cartItems', JSON.stringify(products))
  }

  static updateQuantity(products){
    localStorage.setItem('cartItems', JSON.stringify(products))
  }
}