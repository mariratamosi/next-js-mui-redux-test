import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
import { updateProducts } from "../GlobalRedux/slices/products"

export function useProducList() {
  const dispatch = useDispatch()
  const products = useSelector((state) => state.products)
  const [refreshNeeded, setRefreshNeeded] = useState(true)

  useEffect(() => {
    const getProducsList = () => {
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
        .finally(() => {
          setRefreshNeeded(false)
        })
    }
    if (products.list.length === 0 || refreshNeeded) getProducsList()
    else console.log("already there")
  }, [refreshNeeded])

  const refresh = () => {
    setRefreshNeeded(true)
  }

  return [products, refresh]
}
