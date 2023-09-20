import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

import "../styles/hero.css"

export default function PageHero() {
  const [letterDrop, setLetterDrop] = useState<string[]>(
    new Array(Math.floor(window.innerWidth / 16 / 2)).fill("_")
  )
  const [lightOn, setLightOn] = useState(true)

  useEffect(() => {
    window.addEventListener("resize", handleResize)

    return () => window.removeEventListener("resize", handleResize)
  }, [])

  function handleResize() {
    setLetterDrop(new Array(Math.floor(window.innerWidth / 16 / 2)).fill("_"))
  }

  function toggleLight() {
    setLightOn((prevValue) => !prevValue)
  }

  return (
    <>
      {/* TODO: Fix bug with flickering hero text */}
      {/* <div id="canvas">
        {letterDrop &&
          letterDrop.map((_, index) => (
            <AnimatePresence key={`${index}-drop`}>
              <motion.div
                initial={{
                  opacity: 1,
                  y: 0 - Math.floor(Math.random() * (500 - 300) + 300)
                }}
                animate={{ opacity: 0, y: "200px" }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: Math.floor(Math.random() * (10 - 6) + 6),
                  delay: Math.floor(Math.random() * (16 - 0) + 0),
                  repeat: Infinity
                }}
              >
                <BinaryString />
              </motion.div>
            </AnimatePresence>
          ))}
      </div> */}
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, delay: 0 }}
      >
        <div id="wrapper">
          <div id="container">
            <div id="screen">
              <div id="innerscreen">
                <div id="dummycode" className="select-none">
                  <div>
                    <p className="codeline" style={{ animationDelay: "2s" }}>
                      public class HelloWorld &#123;
                    </p>
                    <p
                      className="codeline pl-2"
                      style={{ animationDelay: "4s" }}
                    >
                      public static void main(String[] args) &#123;
                    </p>
                    <p
                      className="codeline pl-4"
                      style={{ animationDelay: "6s" }}
                    >
                      String hello = &quot;Hello! Thank you for visiting my
                      personal website today.&quot;;
                    </p>
                    <p
                      className="codeline pl-4"
                      style={{ animationDelay: "8s" }}
                    >
                      String enjoy = &quot;I hope you enjoy your time
                      here!&quot;;
                    </p>
                    <p
                      className="codeline pl-4"
                      style={{ animationDelay: "10s" }}
                    >
                      System.out.println(hello + enjoy);
                    </p>
                    <p
                      className="codeline pl-2"
                      style={{ animationDelay: "11s" }}
                    >
                      &#125;
                    </p>
                    <p className="codeline" style={{ animationDelay: "12s" }}>
                      &#125;
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div id="person">
              <div id="leftarm"></div>
              <div id="head">
                <div id="hair"></div>
              </div>
              <div id="rightarm"></div>
            </div>
            <div id="desk">
              <div id="mug">
                <div id="mugshadow"></div>
                <div id="mughandle"></div>
              </div>
              <div id="lampbase">
                <div
                  id="switch"
                  style={{ rotate: lightOn ? "-14deg" : "14deg" }}
                  onClick={toggleLight}
                ></div>
                <div id="lowerarm"></div>
                <div id="upperarm"></div>
                <div id="lamphouse"></div>
                <div id="lamphead"></div>
                <div
                  id="lampshadow"
                  className={lightOn ? "block" : "hidden"}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  )
}

function BinaryString() {
  return (
    <div className="font-mono">
      <span className="text-red-500">0</span>
      <span className="text-orange-500">1</span>
      <span className="text-yellow-500">1</span>
      <span className="text-green-500">0</span>
      <span className="text-blue-500">1</span>
      <span className="text-indigo-500">0</span>
      <span className="text-violet-500">0</span>
      <span className="text-zinc-200">0</span>
      <span> </span>
      <span className="text-red-500">0</span>
      <span className="text-orange-500">1</span>
      <span className="text-yellow-500">1</span>
      <span className="text-green-500">0</span>
      <span className="text-blue-500">1</span>
      <span className="text-indigo-500">0</span>
      <span className="text-violet-500">0</span>
      <span className="text-zinc-200">1</span>
    </div>
  )
}
