# Next.JS Dashboard Application: Flight-Board


This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```bash
npm run dev
```


## Frontend Architeture 🏗️

### Folder Structure 📂🍃
````
src/
├── app/
│   ├── api/
│   │   ├── flights/
│   │   ├── messages/
│   │   └── weather/
│   ├── dashboard/
│   │   ├── components/
│   │   │   ├── FlightsTable.tsx
│   │   │   ├── SystemMessages.tsx
│   │   │   └── WeatherWidget.tsx
│   │   ├── styles/
│   │   │   ├── FlightsTable.module.css
│   │   │   ├── SystemMessages.module.css
│   │   │   └── WeatherWidget.module.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── layout.tsx
└── page.tsx


````

### Key Components and Their Roles 🗝️

1. **Root Layout (`app/layout.tsx`)**
    - Provides the global HTML structure, including common elements like headers and footers.

2. **Dashboard Layout (`app/dashboard/layout.tsx`)**
    - Provides the shared structure for all dashboard items.

3. **Page components (`app/dashboard/page.tsx`)**
    - Handle data fetching for dashboard items.

4. **Presentational Component (`app/dashboard/components/FlightsTable.tsx, WeaterWidget.tsx etc.`)**
    - Receives data as props and handles the display logic.     

##  Semantic Commits 🕵️
Use semantic commits and branch naming. For references, please see below.

### Feature Branches
- `feature/user-authentication`

### Bug Fix Branches
- `bugfix/fix-login-error`

### Hotfix Branches
- `hotfix/security-vulnerability-patch`

### Release Branches
- `release/v1.2.0`

### Improvement Branches
- `improvement/refactor-user-service`

### Experimentation Branches
- `experiment/try-new-auth-method`

### Documentation Branches
- `docs/update-api-docs`

### Chore Branches
- `chore/update-dependencies`


