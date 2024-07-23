import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './components/SingleProduct'
import ProductAdder from './components/ProductAdder'

function App() {


  const products = [
    {
      name: "Apple",
      description: "best apple",
      price: "300",
    },
    {
      name: "Banana",
      description: "best apple",
      price: "300",
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
    },
  ]

  // console.log(products[0])

  //  const [products, setProducts] = useState("")

  const addProductData = (singlerproductdata) => {
    products.push(singlerproductdata)

    // alert("function call")

    console.log(products)
  }


  const [name, setName] = useState("Shyam")

  // let name = "Shyam"

  const changeName = () => {
    setName("Ram")
    // name = "Ram"
  }


  return (
    <>

    <ProductAdder addproduct = {addProductData} />

      {products?.map((data) => (
        <SingleProduct data={data} />
      ))}


      <h2>My name is {name}</h2>


      <button onClick={changeName} >click to change the name</button>

      {/* <SingleProduct data={products[0]}/> */}

      {/* <SingleProduct data={products}/> */}

      {/* name: {products[0].name}
    price: {products[0].price}
    description: {products[0].description} */}

    </>
  )
}

export default App
