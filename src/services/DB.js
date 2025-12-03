export default class DB{

  static setApiURL(data){
    this.apiURL = data;
  }
  static async findAll(){
    const response = await fetch(this.apiURL + "products");
    return response.json();
  }
  
  static async deleteOneById(id){
    const response = await fetch(this.apiURL+"products/"+id,{
      method:"DELETE"
    });
    return response.json();
  }
}