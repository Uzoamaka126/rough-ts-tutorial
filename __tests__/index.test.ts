import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { JSDOM } from 'jsdom';
import { streakCounter } from "../components/counter/index"
import { formattedDate, STREAK_KEY, buildStreak } from "../utils/lib";

describe("Streak Progress Bar", () => {
    let mockLocalStorage: Storage;

    beforeEach(() => {
        const mockJSDom = new JSDOM("", { url: "https://localhost" });

        mockLocalStorage = mockJSDom.window.localStorage;
    })

    // this is to make sure that each test is isolated and no remanants are left in the local storage after testing
    afterEach(() => {
        mockLocalStorage.clear();
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

    it("should store the streak in localStorage", () => {
        const date = new Date();
        streakCounter(mockLocalStorage, date);

        const streakAsString = mockLocalStorage.getItem(STREAK_KEY);        

        expect(streakAsString).not.toBe(null)
    });
});

// let's test a different scenario
describe("with a pre-populated streak", () => {
    let mockLocalStorage: Storage;

    beforeEach(() => {
        const mockJSDom = new JSDOM("", { url: "https://localhost" });

        mockLocalStorage = mockJSDom.window.localStorage;

        const date = new Date("10/04/2023");

        const streak = buildStreak(date, {})
        mockLocalStorage.setItem(STREAK_KEY, JSON.stringify(streak))
    })

    // make sure that each test is isolated and no remanants are left in the local storage after testing
    afterEach(() => {
        mockLocalStorage.clear();
    })

    it("should return the streak from local storage", () => {
        const date = new Date();
        const streak = streakCounter(mockLocalStorage, date);

        expect(streak.startDate).toBe("04/10/2023")
    });

    it("should not increment the streak when login days not consecutive", () => {
        const date = new Date("04/04/2023");
        const streak = streakCounter(mockLocalStorage, date);

        expect(streak.currentCount).toBe(1)
    });

    it("should save the incremented streak to local storage", () => {
        const date = new Date("04/11/2023");
        const streak = streakCounter(mockLocalStorage, date);
        
        expect(streak.currentCount).toBe(2)
    });

    it("should reset if not consecutive", () => {
        const date = new Date("04/11/2023");
        const streak = streakCounter(mockLocalStorage, date);        
        
        expect(streak.currentCount).toBe(2);

        const updatedDay = new Date("04/13/2023");
        const updatedStreak = streakCounter(mockLocalStorage, updatedDay);

        expect(updatedStreak.currentCount).toBe(1);
    });

    it("should not reset the streak for same-day login", () => {
        const date = new Date("04/11/2023");
        const streak = streakCounter(mockLocalStorage, date);        
        
        expect(streak.currentCount).toBe(2);

        const updatedDay = new Date("04/11/2023");
        const updatedStreak = streakCounter(mockLocalStorage, updatedDay);

        expect(updatedStreak.currentCount).toBe(3);
    });

    it("should save the reset streak to local storage", () => {
        const date = new Date("04/11/2023");
        const streak = streakCounter(mockLocalStorage, date);        
        
        expect(streak.currentCount).toBe(2);

        const updatedDay = new Date("04/13/2023");
        const updatedStreak = streakCounter(mockLocalStorage, updatedDay);

        expect(updatedStreak.currentCount).toBe(1);
    });
})