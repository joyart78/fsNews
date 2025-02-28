import ConverterWidget from "@/widgets/converter/ui/Converter/ConverterWidget.tsx";
import styles from "./styles.module.css";

export default function Converter() {
  return (
    <div className={styles.container}>
      <ConverterWidget />
    </div>
  );
}
