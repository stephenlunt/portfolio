import { motion } from "framer-motion"
import { useState } from "react"

import "../styles/hero.css"

export default function PageHero() {
  const [lightOn, setLightOn] = useState<boolean>(true)

  function toggleLight() {
    setLightOn((prevValue) => !prevValue)
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 2, delay: 0 }}
    >
      <div id="container">
        <div id="screen">
          <div id="innerscreen">
            <div id="dummycode" className="select-none">
              <div>
                <p className="codeline" style={{ animationDelay: "2s" }}>
                  public class HelloWorld &#123;
                </p>
                <p className="codeline pl-2" style={{ animationDelay: "4s" }}>
                  public static void main(String[] args) &#123;
                </p>
                <p className="codeline pl-4" style={{ animationDelay: "6s" }}>
                  String hello = &quot;Hello! Thank you for visiting my personal
                  website today.&quot;;
                </p>
                <p className="codeline pl-4" style={{ animationDelay: "8s" }}>
                  String enjoy = &quot;I hope you enjoy your time here!&quot;;
                </p>
                <p className="codeline pl-4" style={{ animationDelay: "10s" }}>
                  System.out.println(hello + enjoy);
                </p>
                <p className="codeline pl-2" style={{ animationDelay: "11s" }}>
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
            <div id="lampshadow" className={lightOn ? "block" : "hidden"}></div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
