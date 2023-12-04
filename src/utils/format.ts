import { NumberFormat } from "@trex/types/utils";

export const numberFormat = ({ num, locale, opt }: NumberFormat) =>
  Number(num)
    .toLocaleString(locale ?? "id-ID", {
      minimumFractionDigits: 0,
      ...opt,
      currency: "IDR",
    })
    .replace(/,/g, ".");
