# User Experience (UX) Guidelines

## Graceful Degradation Guide

### Fallback Mechanism

- Display relevant alternative content for failed data fetches.
- Provide context to users about missing data.

Example:

![alt text](../public/fallbackImage.png)

### Visual Integrity

- Ensure the dashboard's visual presentation remains intact if data cannot be displayed.
- <p style="color: pink">Avoid empty or broken components that could confuse users.</p>
- Use spinners to indicate loading.

### Tokens

- Use tokens for sizing, spacing and colors. (To be found in global.css)
