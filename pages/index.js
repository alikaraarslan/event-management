import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [data, setData] = useState();

  const handleKeyDown = (event) => {
    setData(event.keyCode);
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data]);

  return (
    <div className={styles.container}>
      <div className="container">
        <div className="main" style={{ textAlign: "center" }}>
          <h1>Please press keys.</h1>
          {data && <h3>Key code is {data}</h3>}
        </div>
      </div>
    </div>
  );
}
