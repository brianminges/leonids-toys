// CHAPTER 3
// const gIJoe {
//     id: 1,
//     type: "action figure",
//     price: $5,
//     brand: "Hasbro",
//     batteriesRequired: false,
//     hardOrSoft: "hard"
// }

// const lego {
//     id: 2,
//     type: "building block",
//     price: $50,
//     brand: "The Lego Group",
//     batteriesRequired: false,
//     hardOrSoft: "hard"
// }

// const flappy {
//     id: 3,
//     type: "stuffed animal",
//     price: $25,
//     brand: "Gund",
//     batteriesRequired: true,
//     hardOrSoft: "soft"
// }

// CHAPTER 4
const toys = [
{
    id: 1,
    name: "GI Joe",
    type: "action figure",
    price: 5,
    brand: "Hasbro",
    batteriesRequired: false,
    hardOrSoft: "hard",
    color: "green"
},

{
    id: 2,
    name: "lego",
    type: "building block",
    price: 50,
    brand: "The Lego Group",
    batteriesRequired: false,
    hardOrSoft: "hard",
    color: "multi-colored"
},

{
    id: 3,
    name: "flappy",
    type: "stuffed animal",
    price: 25,
    brand: "Gund",
    batteriesRequired: true,
    hardOrSoft: "soft",
    color: "gray"
}
] 

// console.log(toys)

// CHAPTER 5
// for (const toy of toys) {
//     console.log(`The most popular toy is ${toy.name}`)
// }

// CHAPTER 6
const puppet = {
    id: 4,
    name: "chef",
    type: "puppet",
    price: 20,
    brand: "Melissa and Doug",
    batteriesRequired: false,
    hardOrSoft: "soft",
    color: "tan"
}

const dimpl = {
    id: 5,
    name: "Dimpl",
    type: "sensory",
    price: 15,
    brand: "Fat Brain Toys",
    batteriesRequired: false,
    hardOrSoft: "hard",
    color: "multi-colored"
}

toys.push(puppet)
toys.push(dimpl)

// for (const toy of toys) {
//     console.log(`The most popular toy is ${toy.name}`)
// }
  
// CHAPTER 7
// console.log(`The ${toys[0].color} ${toys[0].name} costs \$${toys[0].price}.`)

// for (const toy of toys) {
//     console.log(`The ${toy.color} ${toy.name} costs \$${toy.price}.`)
// }
 
// CHAPTER 8
// for (const toy of toys) {
//     toy.price = toy.price * 1.05
// }
// for (const toy of toys) {
//     console.log(`The ${toy.color} ${toy.name} now costs \$${toy.price}.`)
// }

// CHAPTER 9
// NOTHING

// CHAPTER 10
const addToyToInventory = (toyObject) => {
    const lastIndex = toys.length - 1
    const currentLastToy = toys[lastIndex]
    const maxID = currentLastToy.id
    const idForNewToy = maxID + 1
    toyObject.id = idForNewToy
    toys.push(toyObject)
}

const blocks = {
    name: "Blocks",
    type: "building",
    price: 4,
    brand: "homemade",
    batteriesRequired: false,
    hardOrSoft: "hard",
    color: "multi-colored"
}

addToyToInventory(blocks)

for (const toy of toys) {
    console.log(`The ${toy.name} sells for ${toy.price}.`)
}