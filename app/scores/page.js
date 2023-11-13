"use client"

import React, { useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@mui/material"
import { useProducList } from "./useProducList"

const page = () => {
  const router = useRouter()
  const [products, refresh] = useProducList()

  useEffect(() => {
    console.log(" products 2", products)
  }, [])

  useEffect(() => {
    console.log(" products", products)
  }, [products])

  return (
    <div>
      <Button
        onClick={() => {
          router.push("/scores/async")
        }}
      >
        Go to async
      </Button>
      <Button
        onClick={() => {
          refresh()
        }}
      >
        Refresh
      </Button>
    </div>
  )
}

export default page
