import { useState } from "react";
import styles from "./styles.module.css";

export const GridArabicos = () => {
  const [numberTyped, setNumberTyped] = useState("");
  const [response, setResponse] = useState("Resposta");

  let milhar = 0;
  let centena = 0;
  let dezena = 0;
  let unidade = 0;
  let arrayConvertednumber = [];

  const clicked = (value) => {
    setNumberTyped(numberTyped + value);
  };
  const clean = () => {
    setNumberTyped("");
    setResponse("Resposta");
  };

  const convertMilhar = (number, position) => {
    arrayConvertednumber[position] = "M".repeat(number);
  };

  const convertCentena = (number, position) => {
    if (number < 4) {
      arrayConvertednumber[position] = "C".repeat(number);
    } else if (number == 4) {
      arrayConvertednumber[position] = "CD";
    } else if (number > 4 && number < 9) {
      arrayConvertednumber[position] = "D" + "C".repeat(number - 5);
    } else {
      arrayConvertednumber[position] = "CM";
    }
  };

  const convertDezena = (number, position) => {
    if (number < 4) {
      arrayConvertednumber[position] = "X".repeat(number);
    } else if (number == 4) {
      arrayConvertednumber[position] = "XL";
    } else if (number > 4 && number < 9) {
      arrayConvertednumber[position] = "L" + "X".repeat(number - 5);
    } else {
      arrayConvertednumber[position] = "XC";
    }
  };

  const convertUnidade = (number, position) => {
    if (number < 4) {
      arrayConvertednumber[position] = "I".repeat(number);
    } else if (number == 4) {
      arrayConvertednumber[position] = "IV";
    } else if (number > 4 && number < 9) {
      arrayConvertednumber[position] = "V" + "I".repeat(number - 5);
    } else {
      arrayConvertednumber[position] = "IX";
    }
  };

  const convert = () => {
    if (numberTyped > 0 && numberTyped < 4000) {
      let numberTypedClean = parseInt(numberTyped);
      let stringNumberTyped = numberTypedClean.toString();
      let arrayNumberTyped = stringNumberTyped.split("");

      if (arrayNumberTyped.length === 4) {
        milhar = arrayNumberTyped[0];
        centena = arrayNumberTyped[1];
        dezena = arrayNumberTyped[2];
        unidade = arrayNumberTyped[3];
        convertMilhar(milhar, 0);
        convertCentena(centena, 1);
        convertDezena(dezena, 2);
        convertUnidade(unidade, 3);
      } else if (arrayNumberTyped.length === 3) {
        centena = arrayNumberTyped[0];
        dezena = arrayNumberTyped[1];
        unidade = arrayNumberTyped[2];
        convertCentena(centena, 0);
        convertDezena(dezena, 1);
        convertUnidade(unidade, 2);
      } else if (arrayNumberTyped.length === 2) {
        dezena = arrayNumberTyped[0];
        unidade = arrayNumberTyped[1];
        convertDezena(dezena, 0);
        convertUnidade(unidade, 1);
      } else {
        unidade = arrayNumberTyped[0];
        convertUnidade(unidade, 0);
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
