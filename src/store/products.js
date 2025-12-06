import {reactive} from 'vue';
import DB from '@/services/DB';
// Initialisation du tableau product à vide
const products=reactive([]);

//Remplissage du tableau products à partir de la DB
const init = (async(apiUrl)=>{
  DB.setApiUrl(apiUrl);
  products.splice(0,products.length,...(await DB.findAll()));
  console.table(products);
  
})

export const productsStore= reactive({
        products,
        init,
  })