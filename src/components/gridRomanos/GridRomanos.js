import { useState, useEffect } from "react";
import styles from "./styles.module.css";

export const GridRomanos = () => {
  const [numberTyped, setNumberTyped] = useState([]);
  const [response, setResponse] = useState(0);

  useEffect(() => {
    convert();
  }, [numberTyped]);

  const convert = () => {
    let calculate = 0;

    numberTyped.map((item, index) => {
      if (item == "M" && index == 0) {
        calculate = calculate + 1000;
      } else if (item == "M" && index > 0) {
        if (numberTyped[index - 1] == "C") {
          calculate = calculate + 800;
        } else {
          calculate = calculate + 1000;
        }
      } else if (item == "D" && index == 0) {
        calculate = calculate + 500;
      } else if (item == "D" && index > 0) {
        if (numberTyped[index - 1] == "C") {
          calculate = calculate + 300;
        } else {
          calculate = calculate + 500;
        }
      } else if (item == "C" && index == 0) {
        calculate = calculate + 100;
      } else if (item == "C" && index > 0) {
        if (numberTyped[index - 1] == "X") {
          calculate = calculate + 80;
        } else {
          calculate = calculate + 100;
        }
      } else if (item == "L" && index == 0) {
        calculate = calculate + 50;
      } else if (item == "L" && index > 0) {
        if (numberTyped[index - 1] == "X") {
          calculate = calculate + 30;
        } else {
          calculate = calculate + 50;
        }
      } else if (item == "X" && index == 0) {
        calculate = calculate + 10;
      } else if (item == "X" && index > 0) {
        if (numberTyped[index - 1] == "I") {
          calculate = calculate + 8;
        } else {
          calculate = calculate + 10;
        }
      } else if (item == "V" && index == 0) {
        calculate = calculate + 5;
      } else if (item == "V" && index > 0) {
        if (numberTyped[index - 1] == "I") {
          calculate = calculate + 3;
        } else {
          calculate = calculate + 5;
        }
      } else if (item == "I") {
        calculate = calculate + 1;
      }
    });
    if (calculate < 3999) {
      setResponse(calculate);
    } else {
      setNumberTyped([]);
      setResponse(0);
    }
  };

  const clicked = (value) => {
    setNumberTyped(() => [...numberTyped, value]);
    // convert();
  };

  const clean = () => {
    setNumberTyped([]);
    setResponse("Resposta");
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
        {numberTyped.length == 0
          ? "Digite um número entre I e MMMCMXCIX (1 e 3999)"
          : ""}
        {response > 3999
          ? "Digite um número entre I e MMMCMXCIX (1 e 3999)"
          : ""}
      </div>
      <div className={styles.divConvert}>
        <div className={styles.number}>
          {numberTyped.length > 0 ? numberTyped : "Digite um número"}
        </div>
        <button onClick={clean} className={styles.button}>
          Limpar
        </button>
      </div>
      <div className={styles.result}>
        {response === 0 ? "Resposta" : response}
      </div>
    </div>
  );
};
