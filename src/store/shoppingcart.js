import DB from '@/services/DB';
import {reactive, computed, ref,watch} from 'vue';
//Initialisation du tableau d'item de la shopping cart
const items = reactive ([]);
//Enregistre la value des options du select (par défaut 5)
const deliveryCost=ref(5);

//---------------------------------
//Calcul du prix des items sans TVA en fonction de la quantitée choisie
const subPrice = computed(()=>{
  return items.reduce(
    (total,item)=>total+Number(item.price)*Number(item.quantity),0
  ).toFixed(2);
});
//Calcul du montant de la TVA enfonction des objets et de leur quantitée en €
const TVA = computed(()=>{
  return (Number(subPrice.value)*0.2).toFixed(2)}
);
//Calcul du prix total (objet + TVA + cout livraison)
const totalPrice = computed(()=>{
  return (Number(subPrice.value) + Number(TVA.value) + ( items.length==0 ? 0 : Number(deliveryCost.value))).toFixed(2)}
);
//----------------------------------

// Permet de remplir le tableau items si il y a des item(s) dans le localStorage sinon un tableau vide.
const init = () => {
  items.splice(
    0,items.length, ...(JSON.parse(localStorage.getItem('cartItems')) || [])
  );
};

// Ajouter un objet dans le tableau item ou modifié la quantité d'un item existant dans le tableau
const addItem = (itemCart) =>{
  const existItemIndex = items.findIndex((i)=> i.id===itemCart.id) // Donne l'index si dans mon tableau j'ai une correspondance d'id
  if(existItemIndex !== -1){
    //Si l'objet existe dans le tableau on fait + à la quantité
    items[existItemIndex].quantity += 1;
   // DB.createNewItem(items);
  }else{
    //Si la quantité est égale à  on push l'objet dans le tableau
    itemCart.quantity=1;
    items.push(itemCart);
   // DB.createNewItem(items);
  }
};
//Permet de mettre à jour la quantity via l'input
const updateQuantity=(id, quantity)=>{
  const indexItem = items.findIndex((item)=>item.id===id);
  if(indexItem !== -1){
  items[indexItem].quantity=Number(quantity);
  }
  //DB.updateQuantity(items);
}
//Permet de réafficher le tableau d'item en supprimant celui dont l'id correspond à celui de l'action @click=shoppingcartStore.deleteItem correspond
const deleteItem=(id)=>{
  const indexItem = items.findIndex((item)=>item.id===id);
  if(indexItem !== -1){
    items.splice(indexItem,1);
   // DB.deleteOneById(items)
  }
}
//Permet de vider le tableau items lorsqu'on fait @click=shoppingcartStore.resetCart
const resetCart = () =>{
  items.length=0;
  //DB.resetCart(items);
}

//Si changement au niveau du tableau items met à jour le local storage
watch(items,()=>DB.updateLoacalStorage(items),{deep:true})

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