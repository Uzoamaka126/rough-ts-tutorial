# rough-ts-tutorial

This is a rough sketch of a streak counter library built with TypeScript.

## Install

```shell (npm)
npm install @uzoamaka126/ts-streak-counter
```

```shell (yarn)
yarn add @uzoamaka126/ts-streak-counter
```

### Usage
```typescript
import { streakCounter } from "@uzoamaka126/ts-streak-counter";

const date = new Date();

/**
 * Returns an object with the following properties:
 * {
 *  currentCount: number, 
 *  lastLoginDate: string, 
 *  startDate: string 
 * }
 * @param {localStorage} localStorage: Storage
 * @param {date} date: number
 **/
const streak = streakCounter(localStorage, date);
