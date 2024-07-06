# Error Handling

The API route functions handles errors by catching fetch failures and returning appropriate error messages.

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
