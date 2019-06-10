import React from "react"
import Head from "next/head"
import AppLayout from "../components/AppLayout"

const Home = () => {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.19.0/antd.min.js" />
      </Head>
      <AppLayout>Hello, Next!</AppLayout>
    </>
  )
}

export default Home
