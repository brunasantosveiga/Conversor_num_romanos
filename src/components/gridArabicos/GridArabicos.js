import { useState } from "react";
import styles from "./styles.module.css";

export const GridArabicos = () => {
  const [numberTyped, setNumberTyped] = useState("");
  const [response, setResponse] = useState("Resposta");

  const clicked = (value) => {
    setNumberTyped(numberTyped + value);
  };
  const clean = () => {
    setNumberTyped("");
    setResponse("Resposta");
  };

  const convert = () => {
    if (numberTyped > 0 && numberTyped < 4000) {
      let numberTypedClean = parseInt(numberTyped);
      let stringNumberTyped = numberTypedClean.toString();
      let arrayNumberTyped = stringNumberTyped.split("");
      let milhar = 0;
      let centena = 0;
      let dezena = 0;
      let unidade = 0;
      let arrayConvertednumber = [];

      if (arrayNumberTyped.length === 4) {
        milhar = arrayNumberTyped[0];
        centena = arrayNumberTyped[1];
        dezena = arrayNumberTyped[2];
        unidade = arrayNumberTyped[3];

        arrayConvertednumber[0] = "M".repeat(milhar);

        if (centena < 4) {
          arrayConvertednumber[1] = "C".repeat(centena);
        } else if (centena == 4) {
          arrayConvertednumber[1] = "CD";
        } else if (centena > 4 && centena < 9) {
          arrayConvertednumber[1] = "D" + "C".repeat(centena - 5);
        } else {
          arrayConvertednumber[1] = "CM";
        }

        if (dezena < 4) {
          arrayConvertednumber[2] = "X".repeat(dezena);
        } else if (dezena == 4) {
          arrayConvertednumber[2] = "XL";
        } else if (dezena > 4 && dezena < 9) {
          arrayConvertednumber[2] = "L" + "X".repeat(dezena - 5);
        } else {
          arrayConvertednumber[2] = "XC";
        }

        if (unidade < 4) {
          arrayConvertednumber[3] = "I".repeat(unidade);
        } else if (unidade == 4) {
          arrayConvertednumber[3] = "IV";
        } else if (unidade > 4 && unidade < 9) {
          arrayConvertednumber[3] = "V" + "I".repeat(unidade - 5);
        } else {
          arrayConvertednumber[3] = "IX";
        }
      } else if (arrayNumberTyped.length === 3) {
        centena = arrayNumberTyped[0];
        dezena = arrayNumberTyped[1];
        unidade = arrayNumberTyped[2];

        if (centena < 4) {
          arrayConvertednumber[0] = "C".repeat(centena);
        } else if (centena == 4) {
          arrayConvertednumber[0] = "CD";
        } else if (centena > 4 && centena < 9) {
          arrayConvertednumber[0] = "D" + "C".repeat(centena - 5);
        } else {
          arrayConvertednumber[0] = "CM";
        }

        if (dezena < 4) {
          arrayConvertednumber[1] = "X".repeat(dezena);
        } else if (dezena == 4) {
          arrayConvertednumber[1] = "XL";
        } else if (dezena > 4 && dezena < 9) {
          arrayConvertednumber[1] = "L" + "X".repeat(dezena - 5);
        } else {
          arrayConvertednumber[1] = "XC";
        }

        if (unidade < 4) {
          arrayConvertednumber[2] = "I".repeat(unidade);
        } else if (unidade == 4) {
          arrayConvertednumber[2] = "IV";
        } else if (unidade > 4 && unidade < 9) {
          arrayConvertednumber[2] = "V" + "I".repeat(unidade - 5);
        } else {
          arrayConvertednumber[2] = "IX";
        }
      } else if (arrayNumberTyped.length === 2) {
        dezena = arrayNumberTyped[0];
        unidade = arrayNumberTyped[1];

        if (dezena < 4) {
          arrayConvertednumber[0] = "X".repeat(dezena);
        } else if (dezena == 4) {
          arrayConvertednumber[0] = "XL";
        } else if (dezena > 4 && dezena < 9) {
          arrayConvertednumber[0] = "L" + "X".repeat(dezena - 5);
        } else {
          arrayConvertednumber[0] = "XC";
        }

        if (unidade < 4) {
          arrayConvertednumber[1] = "I".repeat(unidade);
        } else if (unidade == 4) {
          arrayConvertednumber[1] = "IV";
        } else if (unidade > 4 && unidade < 9) {
          arrayConvertednumber[1] = "V" + "I".repeat(unidade - 5);
        } else {
          arrayConvertednumber[1] = "IX";
        }
      } else {
        unidade = arrayNumberTyped[0];

        if (unidade < 4) {
          arrayConvertednumber[0] = "I".repeat(unidade);
        } else if (unidade == 4) {
          arrayConvertednumber[0] = "IV";
        } else if (unidade > 4 && unidade < 9) {
          arrayConvertednumber[0] = "V" + "I".repeat(unidade - 5);
        } else {
          arrayConvertednumber[0] = "IX";
        }
      }

      setResponse(arrayConvertednumber.join(""));
    }
  };

  return (
    <div>
      <div className={styles.grid}>
        <div onClick={() => clicked("1")} className={styles.round}>
          1
        </div>
        <div onClick={() => clicked("2")} className={styles.round}>
          2
        </div>
        <div onClick={() => clicked("3")} className={styles.round}>
          3
        </div>
        <div onClick={() => clicked("4")} className={styles.round}>
          4
        </div>
        <div onClick={() => clicked("5")} className={styles.round}>
          5
        </div>
        <div onClick={() => clicked("6")} className={styles.round}>
          6
        </div>
        <div onClick={() => clicked("7")} className={styles.round}>
          7
        </div>
        <div onClick={() => clicked("8")} className={styles.round}>
          8
        </div>
        <div onClick={() => clicked("9")} className={styles.round}>
          9
        </div>
        <div onClick={() => clicked("0")} className={styles.zeroArabico}>
          0
        </div>
      </div>
      <div className={styles.warning}>
        {numberTyped === "" || numberTyped < 1 || numberTyped > 3999
          ? "Digite um número entre 1 e 3999"
          : ""}
      </div>
      <div className={styles.divConvert}>
        <div className={styles.number}>
          {numberTyped ? numberTyped : "Digite um número"}
        </div>
        <button onClick={convert} className={styles.button}>
          Converter
        </button>
        <button onClick={clean} className={styles.button}>
          Limpar
        </button>
      </div>
      <div className={styles.result}>{response}</div>
    </div>
  );
};
