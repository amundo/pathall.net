import {ToggleStar} from '../toggle-star/ToggleStar.js'

export class FakeEmail extends HTMLElement {
  constructor(){
    super()
    this.innerHTML = `<table>
    <tbody></tbody>
    </table>`

    this.fetch()
  }

  async fetch(){
    let url = new URL('./fake-emails.json', import.meta.url).href
    let response = await fetch(url)
    let emails = await response.json()

    emails.sort(() => Math.random() < .5)
    this.data = emails
  }


  static get observedAttributes(){
    return ["src"]
  }


  set data(emails){
    emails = emails.map(email => (
        Object.assign(
          {
            starred: Math.random() < .2,
            checked: Math.random() < .5,
          },
          email
        )
      )
    )

    this.emails = emails
    this.render()
  }

  render(){
    this.emails.forEach(email => {
      if(email.checked){ email.starred = true}

      let tr = document.createElement('tr')
      tr.classList.add("email-row")
      tr.innerHTML = `
        <td><input type=checkbox></td>
        <td class=star><toggle-star ${email.starred? 'starred' : ''}></toggle-star></td>
        <td>
          <div class=email-info>
            <strong>${email.subject}</strong>
            <p>${email.firstLine}</p>
          </div>
        </td>
      `
      if(email.checked){ tr.querySelector("input").checked = true }
      this.querySelector('tbody').append(tr)
    })
  }
}

customElements.define('fake-email', FakeEmail)
