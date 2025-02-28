import styles from "./styles.module.css";
import { useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import usdIcon from "@/features/converter/assets/images/usd.svg";
import eurIcon from "@/features/converter/assets/images/EUR.svg";
import gbpIcon from "@/features/converter/assets/images/Pound.svg";
import cadIcon from "@/features/converter/assets/images/CAD.svg";
import dropdownIcon from "@/features/converter/assets/images/down-line.svg";
import useClickOutside from "@/shared/hooks/useClickOutside.ts";
import {
  setCurrency,
  setInputValue,
  setResultCurrency,
} from "@/entities/converter/slices/input/inputSlice.ts";

type CurrencyCode = "USD" | "EUR" | "GBP" | "CAD";

interface Currency {
  label: CurrencyCode;
}

interface InputProps {
  isDisabled?: boolean;
  inputValue: number | "";
  isResult?: boolean;
}

const icons: Record<CurrencyCode, string> = {
  USD: usdIcon,
  EUR: eurIcon,
  GBP: gbpIcon,
  CAD: cadIcon,
};

const allCurrency: Currency[] = [
  { label: "USD" },
  { label: "EUR" },
  { label: "GBP" },
  { label: "CAD" },
];

export default function Input({
  isDisabled = false,
  inputValue,
  isResult = false,
}: InputProps) {
  const dispatch = useDispatch();
  const dropdownRef = useRef<HTMLUListElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState(inputValue);

  useEffect(() => {
    setInput(inputValue);
  }, [inputValue]);

  const getInitialCurrency = (): Currency => {
    const storedCurrency = (
      isResult
        ? localStorage.getItem("currencyResult")
        : localStorage.getItem("currency")
    ) as CurrencyCode | null;

    return (
      allCurrency.find((c) => c.label === storedCurrency) || allCurrency[0]
    );
  };

  const [activeCurrency, setActiveCurrency] =
    useState<Currency>(getInitialCurrency);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  const handleCurrencyChange = (currency: Currency) => {
    setActiveCurrency(currency);
    setIsOpen(false);

    const storageKey = isResult ? "currencyResult" : "currency";
    localStorage.setItem(storageKey, currency.label);

    const action = isResult ? setResultCurrency : setCurrency;
    dispatch(action(currency.label));
  };

  return (
    <div className={styles.input_form}>
      <input
        type="number"
        value={input}
        className={styles.input__input}
        disabled={isDisabled}
        onChange={(e) => {
          const value = Number(e.target.value);
          setInput(value);
          dispatch(setInputValue(value));
        }}
        placeholder="0"
      />
      <div className={styles.divider}></div>
      <div className={styles.input__select}>
        <button
          type="button"
          className={styles.input__btn}
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(!isOpen);
          }}
        >
          <img
            src={icons[activeCurrency.label]}
            alt={activeCurrency.label}
            className={styles.btn_img}
          />
          {activeCurrency.label}
          <img src={dropdownIcon} alt="dropdown" className={styles.btn_img} />
        </button>

        {isOpen && (
          <ul ref={dropdownRef} className={styles.select__form}>
            {allCurrency.map((currency) => (
              <li
                key={currency.label}
                className={styles.select__options}
                onClick={() => handleCurrencyChange(currency)}
              >
                <img
                  src={icons[currency.label]}
                  alt={currency.label}
                  className={styles.btn_img}
                />
                {currency.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
