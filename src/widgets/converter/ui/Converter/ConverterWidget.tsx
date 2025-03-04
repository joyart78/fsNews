import styles from "./styles.module.css";
import { useDispatch, useSelector } from "react-redux";
import arrows from "../img/arrows-exchange.svg";
import { converterApi } from "@/entities/converter/api/converterApi.ts";
import { setResultValue } from "@/entities/converter/slices/input/inputSlice.ts";
import { AppDispatch, RootState } from "@/app/store/store.ts";
import { useEffect } from "react";
import { Input } from "@/features/converter/ui";

type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD";

export default function ConverterWidget() {
  const dispatch: AppDispatch = useDispatch();

  const inputValue = useSelector((state: RootState) => state.input.inputValue);
  const resultValue = useSelector(
    (state: RootState) => state.input.resultValue,
  );
  const resultCurrency = useSelector(
    (state: RootState) => state.input.resultCurrency,
  ) as CurrencyCode;
  const inputCurrency = useSelector(
    (state: RootState) => state.input.inputCurrency,
  ) as CurrencyCode;

  const { data, error } = converterApi.useGetCurrencyQuery(inputCurrency);

  useEffect(() => {
    if (data) {
      dispatch(setResultValue(data.rates[resultCurrency]));
    }
    if (error) console.error(error);
  }, [data, inputValue, inputCurrency]);

  let input: number | "";

  if (inputValue === 0) {
    input = "";
  } else input = inputValue;

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        <Input isDisabled={false} isResult={false} inputValue={input} />
        <button type="button">
          <img src={arrows} alt="arrows-exchange" />
        </button>
        <Input isDisabled={true} inputValue={resultValue} isResult={true} />
      </div>
    </div>
  );
}
