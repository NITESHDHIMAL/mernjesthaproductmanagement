import React, { useState } from 'react'

const ProductAdder = (props) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")


    const onClickhandler = () => {

        const singlerproductdata = { name, description, price }

        props.addproduct(singlerproductdata)

    }

    return (
        <>
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company"/> */}
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Add to your product</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <form class="space-y-6" action="#" method="POST"> */}
                    <div>
                        <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
                        <div class="mt-2">
                            <input id="name" value={name} onChange={(e) => setName(e.target.value)} name="name" type="name" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="Description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
                        <div class="mt-2">
                            <input id="description" value={description} onChange={(e) => setDescription(e.target.value)} name="name" type="name" autocomplete="name" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
                        <div class="mt-2">
                            <input id="price" value={price} onChange={(e) => setPrice(e.target.value)} name="price" type="price" autocomplete="price" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                        </div>
                    </div>
                    <div>
                        <button onClick={onClickhandler} type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Product </button>
                    </div>
                    {/* </form> */}
                </div>
            </div>

        </>
    )
}

export default ProductAdder