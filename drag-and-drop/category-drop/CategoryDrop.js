class CategoryDrop extends HTMLElement {
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
    this.addEventListener('drop', dropEvent => {
      dropEvent.preventDefault()

      let draggableId = '#' + dropEvent.dataTransfer.getData('text')
      let draggable = document.querySelector(draggableId)

      draggable.tagList.add(this.tag)

    })
  }
}

export {CategoryDrop}
customElements.define('category-drop', CategoryDrop)
