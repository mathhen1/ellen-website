"use client"

import { useEffect } from "react";
import AboutMe from "./Components/AboutMe";
import AboutMeDetails from "./Components/AboutMeDetails";
import NavBar from "./Components/NavBar";
import Experience from "./Components/Experience";

export default function Home() {

  useEffect(() => {
    const root = document.querySelectorAll(".reveal")

    const obs = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-reveal")
        }
      })
    })

    root.forEach(node => {
      obs.observe(node)
    })

  }, [])

  return (
    <div className="h-full w-screen overflow-clip">
      <div className="sticky -top-1 z-10 h-full">
        <NavBar />
      </div>

      <AboutMe />

      <AboutMeDetails />

      <Experience />
    </div>
  );
}
