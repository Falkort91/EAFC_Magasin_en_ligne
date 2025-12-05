import DB from '@/services/DB';
import {reactive} from 'vue';

const items = reactive ([]);

const init = () => {
  items.splice(
    0,items.length, ...(JSON.parse(localStorage.getItem('cartItems')) || [])
  );
  console.table(items)
};

const addItem = (product) =>{
  const existItem = items.findIndex((i)=> i.id===product.id)
  if(existItem !== -1){
    items[existItem].quantity += 1;
    DB.createNewItem(items);
    console.log(items);
  }else{
    product.quantity=1;
    items.push(product);
    DB.createNewItem(items);
    console.log(items); 
  }
};

const updateQuantity=(id, quantity)=>{
  const indexItem = items.findIndex((item)=>item.id===id);
  items[indexItem].quantity=Number(quantity);
  DB.updateQuantity(items);
}

export const shoppingcartStore =reactive({
    items,
    init,
    addItem,
    updateQuantity
})