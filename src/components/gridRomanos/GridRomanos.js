import { useState } from "react";
import styles from "./styles.module.css";

export const GridRomanos = () => {
  const [numberTyped, setNumberTyped] = useState("");

  const clicked = (value) => {
    setNumberTyped(numberTyped + value);
    console.log(numberTyped);
  };
  const clean = () => {
    setNumberTyped("");
  };

  return (
    <div>
      <div className={styles.grid}>
        <div onClick={() => clicked("I")} className={styles.round}>
          I
        </div>
        <div onClick={() => clicked("V")} className={styles.round}>
          V
        </div>
        <div onClick={() => clicked("X")} className={styles.round}>
          X
        </div>
        <div onClick={() => clicked("L")} className={styles.round}>
          L
        </div>
        <div onClick={() => clicked("C")} className={styles.round}>
          C
        </div>
        <div onClick={() => clicked("D")} className={styles.round}>
          D
        </div>
        <div onClick={() => clicked("M")} className={styles.MRomano}>
          M
        </div>
      </div>
      <div className={styles.warning}>
        Digite um número entre I e MMMCMXCIX (1 e 3999)
      </div>
      <div className={styles.divConvert}>
        <div className={styles.number}>
          {numberTyped ? numberTyped : "Digite um número"}
        </div>
        <button onClick={clean} className={styles.button}>
          Limpar
        </button>
      </div>
      <div className={styles.result}>RESULTADO</div>
    </div>
  );
};
