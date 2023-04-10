type StreakCounter = {
    currentCount: number;
    lastLoginDate: string;
    startDate: string; 
}

export function streakCounter(_localStorage: Storage, date: Date): StreakCounter {
    return {
        currentCount: 1,
        lastLoginDate: new Date().toLocaleDateString("en-UK"),
        startDate: new Date().toLocaleDateString("en-UK"),
    }
}