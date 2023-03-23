import React from "react"
import { Layout } from "../infrastructure/layouts/Layout"
import "../styles/global.css"
import Home1 from "./sections/Home1"

function index() {
  return (
    <>
      <Layout inverse={true}>
        <Home1 />
      </Layout>
    </>
  )
}

export default index
