import { Pet } from "./idex_2";
import './styles.css'
import './test.css'
import * as data from '../db.json'

console.log(25)
console.log(data.products)

let products = []
let autos = []

const prod = document.getElementById('product')

for (let i = 0; i < data.products.length; i++) {
    products.push(data.products[i].name)
}
for (let i = 0; i < data.auto.length; i++) {
    autos.push(data.auto[i].name)
}
prod.innerHTML = `
   <ul>
        <li>${products[0]}</li>
        <li>${products[1]}</li>
        <li>${products[2]}</li>
    </ul>
       <ul>
        <li>${autos[0]}</li>
        <li>${autos[1]}</li>
        <li>${autos[2]}</li>
    </ul>
`

console.log('products:', products)
console.log('data.products:', data.products)
