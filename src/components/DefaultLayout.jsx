import React from "react"
import Header from "./Header"

export function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      {/* Footer */}
    </>
  )
}
