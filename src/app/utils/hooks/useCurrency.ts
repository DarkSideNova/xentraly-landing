import { useMemo } from "react";

/**
 * Hook to format a given price into a currency string.
 * 
 * @param price - The price to format as a string or number.
 * @param locale - The locale for formatting (default is "es-PA").
 * @param currency - The currency code (default is "PAB").
 * @returns A formatted currency string.
 */
export const useCurrency = (
    price: string | number,
    locale: string = "en-US",
    currency: string = "USD"
): string => {
    const formattedPrice = useMemo(() => {
        if (price === 0 || price === "0") return "0.0";

        const parsedPrice = typeof price === "string" ? parseFloat(price) : price;

        if (isNaN(parsedPrice)) {
            console.warn("Invalid price provided to useCurrency:", price);
            return "Invalid price";
        }

        const formatter = new Intl.NumberFormat(locale, {
            style: "currency",
            currencyDisplay: "narrowSymbol",
            currency,
        });

        let priceFormatted = formatter.format(parsedPrice);

        // Replace "PAB" with "B/." for Panama-specific formatting
        if (priceFormatted.includes("PAB")) {
            priceFormatted = priceFormatted.replace("PAB", "B/.");
        }

        return priceFormatted;
    }, [price, locale, currency]);

    return formattedPrice;
};