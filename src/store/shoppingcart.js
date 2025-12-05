import DB from '@/services/DB';
import {reactive, computed, ref} from 'vue';

const items = reactive ([]);

const init = () => {
  items.splice(
    0,items.length, ...(JSON.parse(localStorage.getItem('cartItems')) || [])
  );
  console.table(items)
};

const addItem = (itemCart) =>{
  const existItem = items.findIndex((i)=> i.id===itemCart.id)
  if(existItem !== -1){
    items[existItem].quantity += 1;
    DB.createNewItem(items);
    console.log(items);
  }else{
    itemCart.quantity=1;
    items.push(itemCart);
    DB.createNewItem(items);
    console.log(items); 
  }
};

const updateQuantity=(id, quantity)=>{
  const indexItem = items.findIndex((item)=>item.id===id);
  items[indexItem].quantity=Number(quantity);
  DB.updateQuantity(items);
}

const deleteItem=(id)=>{
  const indexItem = items.findIndex((item)=>item.id===id);
  if(id!==-1){
    items.splice(indexItem,1);
    DB.deleteOneById(items)
  }

}

const subPrice = computed(()=>{
  return items.reduce(
    (total,item)=>total+Number(item.price)*Number(item.quantity),0
  ).toFixed(2);
});

const TVA = computed(()=>{
  return (Number(subPrice.value)*0.2).toFixed(2)}
);

const deliveryCost=ref(5);

const totalPrice = computed(()=>{
  return (Number(subPrice.value) + Number(TVA.value) + ( items.length==0 ? 0 : Number(deliveryCost.value))).toFixed(2)}
);

const resetCart = () =>{
  items.length=0;
  DB.resetCart(items);
}

export const shoppingcartStore =reactive({
    items,
    init,
    addItem,
    updateQuantity,
    deleteItem,
    subPrice,
    TVA,
    deliveryCost,
    totalPrice,
    resetCart
})