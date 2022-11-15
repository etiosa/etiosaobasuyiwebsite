import { NextPage } from "next/types"
import React, { useRef, useEffect } from "react";
import styles from "../../styles/Home.module.css"

const Blog: NextPage = () => {
  const ref = useRef(null);
  useEffect(() => {
    import("@lottiefiles/lottie-player");
  });
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2 className="relative">Coming Soon</h2>
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