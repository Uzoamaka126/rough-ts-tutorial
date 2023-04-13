import { 
    buildStreak, 
    differenceInDays, 
    STREAK_KEY, 
    StreakCounter, 
    StreakStatus 
} from "../../utils/lib";

function shouldIncrementOrResetStreakCount(currentDate: Date, lastLoginDate: string): StreakStatus {
    const diff = differenceInDays(currentDate, lastLoginDate);
    
    // logged in the day after the current date
    if (diff === 1) return "increment";
    if (diff === 0) return "none";
    // logged in after a day which would break the streak
    return "reset";
}

export function streakCounter(_localStorage: Storage, date: Date): StreakCounter {
    const streakInLocalStorage = _localStorage.getItem(STREAK_KEY);
    
    if (streakInLocalStorage) {
        try {
            const streak = JSON.parse(streakInLocalStorage || "") as StreakCounter;

            let updatedStreak = <StreakCounter>{};
            
            const STATE = shouldIncrementOrResetStreakCount(date, streak.lastLoginDate);
                
            switch(STATE) {
                case 'increment': {
                    updatedStreak = buildStreak(date, {
                        ...streak,
                        currentCount: streak.currentCount += 1
                    });
                    
                    _localStorage.setItem(STREAK_KEY, JSON.stringify(updatedStreak));
                    return updatedStreak;
                }

                case 'reset': 
                    updatedStreak = buildStreak(date, {
                        ...streak,
                        currentCount: 1
                    });
                    
                    _localStorage.setItem(STREAK_KEY, JSON.stringify(updatedStreak));
                    return updatedStreak;

                default: 
                    _localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
                    return streak;
            }            
        } catch (error) {
            console.error('Failed to parse streak from local storage');  
        }
    }
    const streak = buildStreak(new Date(), {})

    _localStorage.setItem(STREAK_KEY, JSON.stringify(streak));
    return streak;
}