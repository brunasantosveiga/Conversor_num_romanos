import styles from "./styles.module.css";
import { useState } from "react";
import { GridRomanos } from "./components/gridRomanos/GridRomanos";
import { GridArabicos } from "./components/gridArabicos/GridArabicos.js";

function App() {
  const [romanos, setRomanos] = useState(true);
  const [arabicos, setArabicos] = useState(false);

  const gridRomanos = () => {
    setArabicos(false);
    setRomanos(true);
  };
  const gridArabicos = () => {
    setArabicos(true);
    setRomanos(false);
  };

  return (
    <div className={styles.container}>
      <h1>Conversor de números romanos</h1>
      <br />
      <div>
        <button onClick={gridRomanos} className={styles.buttom}>
          Romanos para Arábicos
        </button>
        <button onClick={gridArabicos} className={styles.buttom}>
          Arábicos para Romanos
        </button>
      </div>
      {romanos && <GridRomanos />}
      {arabicos && <GridArabicos />}
    </div>
  );
}

export default App;
