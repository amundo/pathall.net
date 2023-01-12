# Fullscreen layout

The web was originally a document-oriented platform, and vertical scrolling was the default: add more stuff, then the “page” gets taller. If the page is taller than the viewport (that is, the boundaries of the web browser), then you get a scroll bar and you can scroll up and down. 

In other words, you get these two behaviors:

```{=html}
<figure style="display:flex;gap:1em">
<div style="flex:1;height:4em;border:1px solid gray;">
One line here, nothing to scroll to!
</div>
<div style="flex:1;height:4em;border:1px solid gray;overflow-y:scroll;">
<pre>
Several…
lines…
enough
to
need
a
scrollbar
</pre>
</div>
</figure>
```

The left box has just one line, so there’s nothing to “scroll to”. The right box is scrollable because its content exceeds the bounds of the container. Web browsers work this way by default. 

Note that this behavior is actually interactive; if you resize the browser such that its height is shorter than the inherent height of the content in the viewport, the scrollbar will appear or disappear as necessary. It works like this (click and drag the corner):

```{=html}
<figure style="resize:vertical;flex:1;height:2em;border:1px solid gray;overflow-y:scroll;margin-bottom:5em;">
<pre>
Resizing…
this…
vertically…
will
toggle
the
scroll
bar.
</pre>
</figure>
```

If you resize the box far enough, the scrollbar disappears. This behavior can get a bit confusing when the toggle happens — if the box is resized enough that the scrollbar disappears, then browser might suddenly decide that you want to scroll the whole viewport, making for some disorienting movement.

I call this the “Argh, stay put!” effect. Sometimes you don’t _want_ the viewport to scroll.

## Application interfaces

Documents are still the heart of the web. But it also has new uses. One is as an application programming environment, and applications often require a different kind of user interface. We want something more like a dashboard, where the application space is divided up into panes that stay put, but which are scrollable within their bounds. One obvious 

Like this:

```{=html}
<link href=spam-mail.css rel=stylesheet >
<figure id="spam-mail">
  <header>
    <h1>🗑️ spam mail 5000 📨</h1>
  </header>
  <aside style="">
    <button>✏️ compose</button>
    <ul>
      <li><span class=icon-emoji>📥</span> Inbox</li>
      <li><span class=icon-emoji>✉️</span> Sent</li>
      <li><span class=icon-emoji>📄</span> Drafts</li>
      <li><span class=icon-emoji>⭐</span> Important</li>
    </ul>
  </aside>
  <main>
    <fake-email></fake-email>
  </main>
</figure>
```

<script src="fake-email/FakeEmail.js" type=module></script>