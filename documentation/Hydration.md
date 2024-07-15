# Hydration 💧

The current implementation of DashboardPage in Next.js is fetching data on the server-side and then rendering the page with the fetched data. However, some components may rely on client-side data that changes over time, such as the UserInfo component that displays real-time information.

---

## Understanding Hydration and Handling Mismatches in Next.js

When the Next.js server, powered by a Node.js process, starts the application, it first sends the pre-rendered HTML to the browser. Following this, the JavaScript necessary for interactivity is sent.

In my application, the UserInfo component includes a timestamp that updates dynamically after the JavaScript is loaded. This can lead to a mismatch between the server-rendered HTML and the client-rendered HTML after hydration, triggering a hydration warning.

To mitigate this issue, I use the **suppressHydrationWarning** attribute on the <time> element.

```html
<time suppressHydrationWarning datetime="{currentTime}">
  Local time Oslo/Norway: {currentTime}
</time>
```
