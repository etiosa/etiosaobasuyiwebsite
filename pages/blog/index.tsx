import { NextPage } from "next/types"
import React, { useRef, useEffect } from "react";
import styles from "../../styles/Home.module.css"
import Word from "../../components/Animation/Word";
import Text from "../../components/Animation/Text";
const Blog: NextPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className="mt-24">
        <Text duration={0.1} delay={0.5} className="text-3xl font-bold  uppercase text-[#2E435F]" text={"In Development"} />
        </div>
        <lottie-player
          id="firstLottie"
          ref={ref}
          autoplay
          loop
          mode="normal"
          src="/blockchain-development.json"
          style={{ width: "400px", height: "400px" }}
        ></lottie-player>
      </main>
    </div>
  )
}
export default Blog