# Error Handling

## Level of Error Handling

Please follow these guidelines to determine the appropriate level of error handling needed for different parts of the application.

- **Global Error Handling**: For critical, app-wide errors.
- **Page-Level Error Handling**: For errors isolated to a specific page.
- **Component-Level Error Handling**: For errors within specific components.
- **Function-Level Error Handling**: For errors within specific functions or logic blocks.

### Error Handling in API route functions

The API route functions handles errors by catching fetch failures and returning appropriate error messages, i.e. the error handling is done at function level.

On the client-side, the DashboardPage component fetches data and manages errors by returning structured objects containing either data or error messages.

At the component level, the WeatherWidget component displays either weather data or an error message based on the props it receives

```

Error Handling Overview
========================

+-------------------+                +------------------------+
| API Route Function|                | Client-Side Component  |
|-------------------|                |------------------------|
|                   |                |                        |
|   Fetch Weather   |                |  Fetch Weather Data    |
|   Data            |                |  from API              |
|                   |                |                        |
|   +-----------+   |                |   +----------------+   |
|   |  Success  |   |                |   |  Success       |   |
|   +-----+-----+   |                |   +---+------------+   |
|         |         |                |       |                |
|         v         |                |       v                |
|   Return Data     |                |   Return Data          |
|                   |                |                        |
|   +-----------+   |                |   +----------------+   |
|   |  Failure  |   |                |   |  Failure       |   |
|   +-----+-----+   |                |   +---+------------+   |
|         |         |                |       |                |
|         v         |                |       v                |
| Return Error Msg  |                | Return Error Msg       |
+-------------------+                +------------------------+

                              |
                              v

+-------------------------------------------------+
|  WeatherWidget Component                        |
|-------------------------------------------------|
|                                                 |
|  +-----------------+      +------------------+  |
|  | Success         |      | Failure          |  |
|  +-----------------+      +------------------+  |
|  |                 |      |                  |  |
|  | Display Weather |      | Display Error Msg|  |
|  | Data            |      |                  |  |
|  +-----------------+      +------------------+  |
+-------------------------------------------------+
```
