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


  const datafromlocalstorage = JSON.parse(localStorage.getItem("products"))

  const [products, setProducts] = useState(initialproducts)
  // const [products, setProducts] = useState(datafromlocalstorage)

  const addProductData = (singlerproductdata) => {
    let allproducts = [...products, singlerproductdata]

    setProducts(allproducts)

    localStorage.setItem("products", JSON.stringify(allproducts))


    console.log(products)
  }


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

    </>
  )
}

export default App
