class ToggleStar extends HTMLElement {
  constructor() {
    super();
    
    // Create a button element
    this.button = document.createElement('button')
    this.button.textContent = '⭐'
    this.append(this.button)

    // Set the component's initial state
    this.starred = false
    
    // Add a click event listener to the button
    this.button.addEventListener('click', () => this.toggle())
  }

  connectedCallback(){
    if(this.hasAttribute('starred')){
      this.starred = true
    }
  }
  
  // Define a toggle method to change the component's state
  toggle() {
    if(this.hasAttribute('starred')){
      this.removeAttribute('starred')
    } else {
      this.setAttribute('starred', true)
    }
  }
}

export {ToggleStar}
customElements.define('toggle-star', ToggleStar)
