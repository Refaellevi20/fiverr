import { useEffect } from "react";
import { CenterTxtHome } from "../cmps/centerTxtHome"
import { Footer } from "../cmps/Footer"
import { Header } from "../cmps/Header"
import { MiddleHome } from "../cmps/MiddleHome"

function updateBackgroundColor() {
  const body = document.body
  const windowHeight = window.innerHeight

  if (windowHeight <= 700) {
    body.style.backgroundColor = "#004047"
  } else if (windowHeight <= 1384) {
    body.style.backgroundColor = "#014e56"
  } else if (windowHeight <= 2129) {
    body.style.backgroundColor = "#012f34"
  } else {
    body.style.backgroundColor = "#f67e7e"
  }
}

export function HomePage() {

  useEffect(() => {
    window.addEventListener("resize", updateBackgroundColor)

    updateBackgroundColor()

    return () => {
      window.removeEventListener("resize", updateBackgroundColor)
    }
  }, [])

  return (

    <div className="home">

      <Header />
      <MiddleHome />
      <CenterTxtHome />
      <Footer />

    </div>
  )
}




