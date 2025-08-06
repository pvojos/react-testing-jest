import { formatNumber } from "./numberFormatHelper";

describe("Tests for the helper functions of the app", () => {
    it("should convert the numbers to strings with two decimal places", () => {
        expect(formatNumber(350)).toBe("350.00");
    });
});