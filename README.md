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

const today = new Date();

// params:
//
const streak = streakCounter(localStorage, today); // returns an object
