import element from 'virtual-element'
import {render,tree} from 'deku'

var app = tree(
  <div class="MyApp">
    <h1>I am Huge</h1>
  </div>
)


export default {
  render: el => render(app, el)
}
