
const items = [

  { name: 'bike', price:100 },
  { name: 'tv', price:10000 },  
  { name: 'car', price:1000000 },  
  { name: 'mobile', price:10000 },  
  { name: 'laptop', price:25000 },  
  { name: 'pen', price:20 },  
  { name: 'book', price:45 },  
  { name: 'adobe', price:99 },  

]

// method for filtering items this will print items which are price less than 100
const fliterdItems = items.filter((item) => {
         return item.price <= 100
  
})

console.log(items)
console.log(filteredItems)
