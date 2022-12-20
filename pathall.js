document.querySelector('img')
  .addEventListener("mouseover", mouseoverEvent => {
    mouseoverEvent.target.src = 'images/me-eyes.svg'
  })

document.querySelector('img')
  .addEventListener("mouseout", mouseoutEvent => {
    mouseoutEvent.target.src = 'images/me.jpg'
  })