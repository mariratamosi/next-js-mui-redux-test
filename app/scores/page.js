"use client"

import React, { useEffect } from "react"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { updateProducts } from "../GlobalRedux/slices/products"

const page = () => {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)

  useEffect(() => {
    console.log(" products", products)
    const getScore = () => {
      console.log("getScore")
      axios
        .get("https://fakestoreapi.com/products")
        .then((response) => {
          // Handle response
          console.log(response.data)
          dispatch(updateProducts(response.data))
        })
        .catch((err) => {
          // Handle errors
          console.error(err)
        })
    }
    getScore()
  }, [])

  useEffect(() => {
    console.log(" products", products)
  }, [products])

  return <div>Okay</div>
}

export default page
