import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import SpoilerLoader from "@/shared/SpolerLoader/SpoilerLoader.tsx";
import { AppDispatch, RootState } from "@/app/store/store.ts";
import { converterApi } from "@/entities/converter/api/converterApi.ts";

export default function CurrencyNav() {
  const [value, setValue] = useState(0);
  const resultCurrency = useSelector(
    (state: RootState) => state.input.resultCurrency,
  );
  const inputCurrency = useSelector(
    (state: RootState) => state.input.inputCurrency,
  );

  const dispatch: AppDispatch = useDispatch();
  const { data, error, isLoading } =
      converterApi.useGetCurrencyQuery(inputCurrency);

  useEffect(() => {
    console.log(data)

    if (data) setValue(data.rates[resultCurrency]);
    if (error) {
      console.error("Failed to fetch currency data:", error);
    }
  }, [dispatch, resultCurrency, inputCurrency, data]);

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
      1 {inputCurrency} = {isLoading ? <SpoilerLoader /> : value}{" "}
      {resultCurrency}
    </div>
  );
}
