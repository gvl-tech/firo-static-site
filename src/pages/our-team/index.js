import React from "react"
import { Layout } from "../../infrastructure/layouts/Layout"
import Community from "./sections/Community"
import CoreDevelopers from "./sections/CoreDevelopers"
import Founders from "./sections/Founders"
import MobileDevelopment from "./sections/MobileDevelopment"
import Research from "./sections/Research"
import "../../styles/global.css"

const Team = () => {
  return (
    <Layout>
      <Founders />
      <CoreDevelopers />
      <MobileDevelopment />
      <Community />
      <Research />
    </Layout>
  )
}

export default Team
