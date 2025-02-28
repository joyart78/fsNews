import { LOGIN, PASSWORD } from "@/shared/constants/constants.ts";

export default function useVerific(login: string, pass: string) {
  return login === LOGIN && pass === PASSWORD;
}
