import domready from 'domready'
import base from './base'

domready(() => {
 base.render(document.getElementById("base"))
})
