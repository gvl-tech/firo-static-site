import React from "react"
import Footer from "./Footer"
import { Header } from "./Header"
import { Helmet } from "react-helmet"
import useSiteMetadata from "../hooks/useSiteMetaData"

export const Layout = ({ children, inverse, mobileInverse }) => {
  const { title, description } = useSiteMetadata()

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>{title}</title>
        <meta name="description" content={description} />
      </Helmet>
      <Header inverse={inverse} mobileInverse={mobileInverse} />
      {children}
      <Footer />
    </>
  )
}
