import React, { useState } from 'react'

const ProductAdder = (props) => {

    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [price, setPrice] = useState("")

    //   let name = "Shyam"

    const onClickhandler = () => {

        const singlerproductdata = { name, description, price }

        props.addproduct(singlerproductdata)
        // setName("Ram")
        // let name = "Ram"
        // alert("event call")

        console.log(singlerproductdata)

    }

    return (
        <>

            <input type="text" value={name} onChange={(e) => setName(e.target.value) } placeholder='name' /> <br />
            <input type="text" value={description} onChange={(e) => setDescription(e.target.value) } placeholder='description'/> <br />
            <input type="text" value={price} onChange={(e) => setPrice(e.target.value) } placeholder='price'/> <br /> 

            <button onClick={onClickhandler}> Add Product   </button>

            {/* <h2>My name is {name} </h2> */}

        </>
    )
}

export default ProductAdder