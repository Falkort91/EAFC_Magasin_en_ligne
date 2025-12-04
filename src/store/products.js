import {reactive} from 'vue';
import DB from '@/services/DB';

const products=reactive([]);

const init = (async(apiUrl)=>{
  DB.setApiUrl(apiUrl);
  products.splice(0,products.length,...(await DB.findAll()));
  console.table(products);
  
})

export const productsStore= reactive({
        products,
        init,
  })