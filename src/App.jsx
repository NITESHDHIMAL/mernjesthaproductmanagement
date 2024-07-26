import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SingleProduct from './components/SingleProduct'
import ProductAdder from './components/ProductAdder'

function App() {


  const initialproducts = [
    {
      name: "Apple",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Banana",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
    {
      name: "Orange",
      description: "best apple",
      price: "300",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/1200px-Red_Apple.jpg"
    },
  ]

  // console.log(products[0])

  const datafromlocalstorage = JSON.parse(localStorage.getItem("products"))

  const [products, setProducts] = useState(initialproducts)
  // const [products, setProducts] = useState(datafromlocalstorage)

  const addProductData = (singlerproductdata) => {



    // let allproducts = [...products, singlerproductdata]
    let allproducts = [singlerproductdata]

    setProducts(allproducts)

    localStorage.setItem("products", JSON.stringify(allproducts))
    // products.push(singlerproductdata)

    // alert("function call")

    console.log(products)
  }


  // const [name, setName] = useState("Shyam")

  // // let name = "Shyam"

  // const changeName = () => {
  //   setName("Ram")
  //   // name = "Ram"
  // }


  // const saveData = () => {
  //   localStorage.setItem("name", "green apple")
  //   localStorage.setItem("description", "best green apple")
  //   localStorage.setItem("price", "400")
  // }

  // const getData = () => {
  //   const getData = localStorage.getItem("name")
  //   alert(getData)
  // }

  // const deleteData = () => {
  //   localStorage.removeItem("name")

  // }



  return (
    <>
 
      <ProductAdder addproduct={addProductData} />

      <section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
        <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div class="mx-auto max-w-md text-center">
            <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
          </div>
          <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
            {products?.map((data) => (
              <SingleProduct data={data} />
            ))}
          </div>

        </div>
      </section>
      <h2 className='text-red-500'>name</h2>




      {/* locastorage  */}
      {/* <button onClick={saveData}>Save Data</button>
      <button onClick={getData}>Get Data</button>
      <button onClick={deleteData}>Delete Data</button> */}


      {/* <h2>My name is {name}</h2>
      <button onClick={changeName} >click to change the name</button> */}

      {/* <SingleProduct data={products[0]}/> */}

      {/* <SingleProduct data={products}/> */}

      {/* name: {products[0].name}
    price: {products[0].price}
    description: {products[0].description} */}

    </>
  )
}

export default App
