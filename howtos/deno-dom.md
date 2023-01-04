# Parse an HTML string into a DOM tree with deno

See deno manual: 

<https://deno.land/manual@v1.26.2/jsx_dom/deno_dom>



```
import { DOMParser } from "https://deno.land/x/deno_dom/deno-dom-wasm.ts";
let html = `<!doctype html>
<h1>Some stuff!</h1>`
let dom = new DOMParser().parseFromString(html, 'text/html')
dom.querySelector("h1").textContent // Some stuff!
```

## Notes

There are some missing things I have noticed:

* Missing `.rows` and `.cells` properties on `<table>` and `<tr>`. [known issue](https://github.com/b-fuze/deno-dom/issues/123)
