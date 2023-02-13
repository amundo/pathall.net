---
title: Parsing Google Docs HTML and CSS
tags: google, css, html, parsing-css
---

Here’s a style sampler page I made with Google Docs:


[Sampler Doc](https://docs.google.com/document/d/1MA5kl7o5BvleTnsyZny9qba7ap76cQi8zZ3AvC5Dfk4/edit#)

I basically just made an instance of every default class:

<figure>
<img id=menu-screenshot src="images/screenshot-sampler.png" alt="A screenshot of the default styles in a Google Doc" >
</figure>


Here’s where you download the HTML version in Google Docs:

<figure>
<img id=menu-screenshot src="images/download-as-html.png" alt="A screenshot of the download as html menu option in Google Docs" >
</figure>

So you unzip that and you get [`StyleSampler.html`](StyleSampler.html), which looks about the same. But lets look at the code (I formatted indented the `HTML` in `VS Code` to be more readable): 

<script src="https://cdn.jsdelivr.net/gh/MarketingPipeline/Ace-Editor-Web-Component@1.0.1/dist/ace-editor-wc.min.js" ></script> 
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/MarketingPipeline/Ace-Editor-Web-Component@v1.0.1/dist/ace-editor-wc.min.css">

<figure id=sampler-1>
<figcaption>The unchanged <code>HTML</code> from Google Docs</figcaption>
</figure>

<script type=module>
let ae = new AceEditorWC
let response = await fetch('StyleSampler.html')
let html = await response.text()
ae.textContent = html 
ae.setAttribute('language', 'html')
document.querySelector("#sampler-1").insertAdjacentElement("afterbegin", ae)
</script>

<style>
ace-editor {
  display:block;
  max-width: 80%;
  max-height: 20rem;
  overflow: scroll;
}
</style>
