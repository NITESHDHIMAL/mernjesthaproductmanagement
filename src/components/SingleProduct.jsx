import React from 'react'

const SingleProduct = (data) => {

    console.log("single product data", data)

  return (
    <>


    <div>
        name: {data?.data?.name}
        price: {data?.data?.price}
        description: {data?.data?.description}
    </div>

    </>
  )
}

export default SingleProduct