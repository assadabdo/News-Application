# NEWEST — News by Category

**NEWEST** is a React + Vite web app that fetches and displays the latest news headlines by category using the **NewsAPI** service. The request is made through a **Netlify Function** to keep the client-side clean and centralize the API call.

---

## live Demo :

https://newsappllication.netlify.app/

## Github repository:

https://github.com/assadabdo/News-Application

## Features

- Category-based headlines (General, Business, Technology, Science, Health, Sports, Entertainment)
- Loading state while fetching results
- Deployed-friendly architecture using **Netlify Functions**

---

## Tech Stack

- **Frontend:** React (v19) + Vite
- **Routing:** React Router DOM
- **Styling:** Tailwind CSS (v4) + custom CSS
- **UI:** MUI (used for form controls)
- **Loading:** react-loader-spinner
- **Backend:** Netlify Serverless Functions (JavaScript)
- **API:** NewsAPI `top-headlines` endpoint

---

## How it works

1. The user selects a category in the navbar.
2. The UI calls `getResults({ selected })` from the app context.
3. The app fetches data from:
   - `/.netlify/functions/call?selected=<category>`
4. The Netlify function calls NewsAPI:
   - `https://newsapi.org/v2/top-headlines?category=<category>`
5. Results are rendered as cards.

---

## Categories

The navbar supports the following categories:

- `general`
- `business`
- `technology`
- `science`
- `health`
- `sports`
- `entertainment`

---

## Scripts

- `npm run dev` — start Vite dev server
- `npm run build` — build the production bundle
- `npm run preview` — preview the production build
- `npm run lint` — run ESLint

## Disclaimer

News data is provided by **NewsAPI** and is subject to their terms and availability.
