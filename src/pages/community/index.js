import React from "react"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/global.css"
import Merchants from "./section/Merchants"
import Social from "./section/Social"

const Community = () => {
  return (
    <Layout>
      <Social />
      <Merchants />
    </Layout>
  )
}

export default Community
