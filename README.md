Demo:[Shop and ShoppingCart](https://falkort91.github.io/EAFC_Magasin_en_ligne/)

# Cahier des charges — Framework Client Shopping Cart

## Features obligatoires
- Liste dynamique des produits depuis MockAPI  
- Ajout dans le panier  
- Liste dynamique des produits du panier  
- Calcul dynamique du total HTVA  
- Modification de la quantité des produits du panier  
- Suppression des produits du panier  

### Structure
- Un store `products` avec un `DB.js`  
- Un store `shoppingCart`

## Features optionnelles
- Calcul dynamique de la TVA et modification des frais de port  
- Shopping cart dans le localStorage avec un watcher  
- Les boutons en composants UI (`./components/ui/MyButton.vue`)
