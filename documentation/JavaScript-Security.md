# JavaScript Security

## Avoiding JavaScript Attack Vectors

### Cross-Site Script Injections

This application includes a text area for embedding YouTube videos. To render the embedded code, `dangerouslySetInnerHTML` is used, allowing users to paste HTML directly into the interface. However, without sanitizing the input with `DOMPurify`, it is possible to inject malicious JavaScript code. For example:

```html
<button onclick="alert('123')">Click here</button>

<p onmouseover="alert('123')">Read this</p>

<p><a href="javascript:alert('Injected via a href')">More on this</a></p>
```

`DOMPurify` is configure to allow YouTube iframes with the required attributes:

```
  const sanitizerConfig = {
    ALLOWED_TAGS: ['iframe'],
    ALLOWED_ATTR: [
      'src', 'width', 'height', 'frameborder', 'allow', 'allowfullscreen',
      'title', 'referrerpolicy'
    ],
    ALLOWED_URI_REGEXP: /^(https:\/\/www\.youtube\.com\/embed\/[a-zA-Z0-9_-]+\?.*)$/,
  };

```
