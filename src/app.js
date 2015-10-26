import handlebars from 'handlebars'
import domready from 'domready'

let templateSrc = `
  <h1>Hello World</h1>
  <ul>
    {{#each person}}
      <li>
        <h4>{{name}}</h4>
        <p>{{description}}</p>
      </li>
    {{/each}}
  </ul>
`

class Application {
  constructor() {
    this.template = handlebars.compile(templateSrc)
  }

  start() {
    document.body.innerHTML = this.template({
      person: [
      { name: 'Zeus', description: 'Good with thunder.'  },
      { name: 'Daniel Sont', description: 'Good with code.' },
      { name: 'Jesus', description: 'Good with sins.' },
    ]})
  }
}

let app = new Application()

domready(() => {
 app.start()
})
