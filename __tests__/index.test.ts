import { describe, it, expect, beforeEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { streakCounter } from "../components/counter/index"

export function formattedDate(date: Date): string {
    return date.toLocaleDateString("en-UK");
}

describe("Streak Progress Bar", () => {
    let mockLocalStorage: Storage;

    beforeEach(() => {
        const mockJSDom = new JSDOM("", { url: "https://localhost" });

        mockLocalStorage = mockJSDom.window.localStorage;
    })


    it("should return a streak progress object with the currentCount, startDate & lastLoginDate", () => {
        const date = new Date();
        const streak = streakCounter(mockLocalStorage, date);

        expect(streak.hasOwnProperty("currentCount")).toBe(true)
        expect(streak.hasOwnProperty("startDate")).toBe(true)
        expect(streak.hasOwnProperty("lastLoginDate")).toBe(true)
    });

    it("should return a streak count starting at 1 with a tracked lastLoginDate", () => {
        const date = new Date();
        const streak = streakCounter(mockLocalStorage, date);
        const dateFormatted = formattedDate(date);

        expect(streak.currentCount).toBe(1)
        expect(streak.lastLoginDate).toBe(dateFormatted)
    });

});