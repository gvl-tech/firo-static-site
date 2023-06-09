import React from "react"
import { Layout } from "../infrastructure/layouts/Layout"
import Home1 from "./sections/Home1"
import Home2 from "./sections/Home2"
import Home3 from "./sections/Home3"
import Home4 from "./sections/Home4"
import "../styles/global.css"

function index() {
  return (
    <>
      <Layout inverse={true}>
        <Home1 />
        <Home2 />
        <Home3 />
        <Home4 />
      </Layout>
    </>
  )
}

export default index
