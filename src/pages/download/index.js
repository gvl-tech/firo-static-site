import React from "react"
import { Layout } from "../../infrastructure/layouts/Layout"
import "../../styles/global.css"
import DesktopWallet from "./section/DesktopWallet"
import FiroWallet from "./section/FiroWallet"
import MobileWallet from "./section/MobileWallet"
import ThirdWallet from "./section/ThirdWallet"

const DownloadFiro = () => {
  return (
    <Layout>
      <FiroWallet />
      <DesktopWallet />
      <MobileWallet />
      <ThirdWallet />
    </Layout>
  )
}

export default DownloadFiro
