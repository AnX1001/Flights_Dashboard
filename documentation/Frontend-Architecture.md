# Frontend Architeture 🏗️

## Folder Structure

```
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
│   │   │   └── WidgetCard.tsx
│   │   ├── styles/
│   │   │   ├── FlightsTable.module.css
│   │   │   ├── SystemMessages.module.css
│   │   │   └── WeatherWidget.module.css
│   │   │   └── WdigetCard.module.css
│   │   ├── layout.tsx
│   │   └── page.tsx
├── layout.tsx
└── page.tsx


```

## Key Components and Their Roles

1. **Root Layout (`app/layout.tsx`)**

   - Provides the global HTML structure, including common elements like headers and footers.

2. **Dashboard Layout (`app/dashboard/layout.tsx`)**

   - Provides the shared structure for all dashboard items.

3. **Page components (`app/dashboard/page.tsx`)**

   - Handle data fetching for dashboard items.

4. **Presentational Component (`app/dashboard/components/FlightsTable.tsx, WeatherWidget.tsx etc.`)**
   - Receives data as props and handles the display logic.

## Data Fetching

The data is retrieved from a route handler, such as /api/flights/route.ts, and is then passed as props from the parent component /dashboard/page.tsx to the presentational components, including FlightsTable.tsx and WeatherWidget.tsx.

### Component-based Architecture

Each component should be responsible for a specific part of the UI and handle its own state and data shaping. For example, the `DashboardPage` component is responsible for data fetching, while the subcomponent `WeatherWidget` handles its own data transformation needs.
