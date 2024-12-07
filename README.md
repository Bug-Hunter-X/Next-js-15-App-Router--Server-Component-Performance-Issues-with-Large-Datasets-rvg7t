# Next.js 15 App Router: Server Component Performance Issues with Large Datasets

This repository demonstrates a performance issue encountered when using server components in the Next.js 15 App Router with substantial datasets.  The application struggles to handle the rendering process when a significant amount of data is involved.

## Problem Description

The provided `bug.js` file showcases a server component that fetches a large dataset.  When this component renders, the application may exhibit slowdowns or even crashes, depending on the dataset size and server resources.

## Solution

The `bugSolution.js` file presents a solution involving data pagination and/or optimized data fetching strategies. This mitigates the impact of large datasets on the performance of the server component.

## Steps to Reproduce

1. Clone this repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm run dev` to start the Next.js development server.
5. Observe the performance when navigating to the page containing the server component.

## Additional Notes

- Consider using data optimization techniques (caching, partial rendering) to further enhance performance.
- This issue is likely specific to larger applications; smaller datasets may not exhibit the performance problem.