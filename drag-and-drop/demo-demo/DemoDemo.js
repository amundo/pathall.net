class DemoDemo extends HTMLElement {
  constructor(){
    super()
    this.listen()
  }

  async fetch(url){
    let response = await fetch(url)
    let data = await response.json()
    this.data = data
  }

  connectedCallback(){
    this.figure = this.querySelector('figure')

    
    // let [figure, style, script] = Array.from(this.children)
    let figure = this.querySelector('figure')
    let script = this.querySelector('script')
    let style = this.querySelector('style')

    style.dataset.label = 'CSS'
    style.setAttribute('contenteditable', true)
    script.dataset.label = 'Javascript'
    let source = document.createElement('pre')
    source.textContent = figure.outerHTML
    source.dataset.label = 'HTML'
    figure.after(source)
  }

  static get observedAttributes(){
    return ["src"]
  }

  attributeChangedCallback(attribute, oldValue, newValue){
    if(attribute == "src"){
      this.fetch(newValue)
    }
  }

  /*
  set data(data){
    this.whatever = data.whatever
    this.metadata = data.metadata
    this.render()
  }

  get data(){
    return {
      whatever: this.whatever,
      metadata: this.metadata
    }
  }
  */

  render(){
    // edit .innerHTML here
  }

  listen(){
    /*
    this.addEventListener('click', clickEvent => {
      if(clickEvent.target.matches()){

      }
    })
    */
  }
}

export {DemoDemo}
customElements.define('demo-demo', DemoDemo)
