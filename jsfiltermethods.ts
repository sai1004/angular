//https://www.youtube.com/watch?v=R8rmfD9Y5-c


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

//===================================================================

 

// method for mapping items this will print only price of items

const itemNames = items.map((item) => {
         return item.price
})

console.log(items)
console.log(itemNames)

//===================================================================
 

// method for finding items

const foundItem = items.find((item) => {
         return item.name === 'book'
})

console.log(items)
console.log(foundItem)

//===================================================================

 

// method for forEach

items.forEach((item) => {
  
   console.log(items.price)
})

//===========================================================================


// method for some 
 
const hasInexpensiveItems = items.some((item) => {
  
   return item.price <= 0
})

console.log(hasInexpensiveItems)

//===========================================================================


// method for every 

const hasInexpensiveItems = items.every((item) => {
  
   return item.price <= 1000
})

console.log(hasInexpensiveItems)

//===========================================================================


// method for reduce 


const total = items.reduce((currentTotal, item) => {
  
   return item.price + currentTotal
  
},0)

console.log(total)

//===========================================================================

// method for includes
const items = [1,2,3,4,5,6]

const includesTwo = items.includes(7)

console.log(includesTwo)
