export let logEvent = (event, containerSelector) => {
  let container = document.querySelector(containerSelector)
  let message = `<small>[${performance.now()}ms]</small> <code>${event.type}</code> fired on ${event.target.tagName}`
  let p = document.createElement('p')
  p.innerHTML = message
  container.append(p)
  container.scrollTop = container.scrollHeight
}