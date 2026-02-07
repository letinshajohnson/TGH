---------------------------------------------------------------------------------------------------------------
GIF Explorer – Next.js Technical Assessment
---------------------------------------------------------------------------------------------------------------

A lightweight GIF Explorer web application built using Next.js, React, and TypeScript.
The app allows users to search and browse GIFs using a public GIF API, similar to a simplified version of Giphy.

This project was implemented as part of a technical assessment, focusing on clean UI, performance, reusable components, and testing best practices.


Live Features
---------------------------------------------------------------------------------------------------------------
Search GIFs by keyword: Search is triggered only by pressing Enter or clicking the Search button
Display results in a responsive grid layout
Uniform GIF card width & height for consistent UI
Click on a GIF to view a larger version in a modal
Load More pagination without page refresh
Skeleton loaders for better perceived performance
Empty state when no GIFs are found
Error handling UI for API failures
Reusable and well-structured React components


Tech Stack
---------------------------------------------------------------------------------------------------------------
Next.js (App Router)
React + TypeScript
Tailwind CSS
Giphy Public API
Jest & React Testing Library


Setup Instructions
---------------------------------------------------------------------------------------------------------------
Install dependencies
npm install

Run the development server
---------------------------------------------------------------------------------------------------------------
npm run dev


Testing
---------------------------------------------------------------------------------------------------------------
This project includes both unit tests and integration tests.

Run all tests
npm test

Run tests in watch mode
npm run test:watch


Test Coverage Includes
---------------------------------------------------------------------------------------------------------------
Unit tests for reusable components (SearchBar, GifCard)


Integration tests for:
---------------------------------------------------------------------------------------------------------------
Search flow
API interaction (mocked)
Empty results state
Explicit user-triggered search behavior


Production Build
---------------------------------------------------------------------------------------------------------------
npm run build
npm run start

Open:
http://localhost:3000


Design Decisions
---------------------------------------------------------------------------------------------------------------
Search is not auto-triggered while typing, strictly following the task requirement.
GIF cards use fixed-size containers with object-fit: cover to prevent layout shifts.
API calls are mocked in tests to ensure fast and deterministic results.
Load More pagination appends results instead of refreshing the page.


Possible Enhancements
---------------------------------------------------------------------------------------------------------------
Infinite scrolling
Improved accessibility (ARIA roles, keyboard navigation)
Caching using SWR or React Query
GIF playback on hover


Author
---------------------------------------------------------------------------------------------------------------
Letinsha Johnson
Senior Full Stack Developer