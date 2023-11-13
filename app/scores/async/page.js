"use client"

import React, { useEffect } from "react"
import { Button } from "@mui/material"
import { useRouter } from "next/navigation"
import { useProducList } from "../useProducList"

const page = () => {
  const [products, refresh] = useProducList()
  const router = useRouter()

  useEffect(() => {
    console.log("useEffect products async", products)
  }, [])

  return (
    <div>
      <Button
        onClick={() => {
          router.push("/scores")
        }}
      >
        Go to normal
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
