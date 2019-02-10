
import OscappsAccordion from 'oscapps-accordion'

import './scss/styles.scss'

document.addEventListener('DOMContentLoaded', () => {
  const instance = new OscappsAccordion(document.getElementById('OscappsAccordion-ajax'), {
    ajaxContent: [{
      indexSection: 1,
      url: './assets/ajaxContent1.html'
    }, {
      indexSection: 3,
      url: './assets/ajaxContent2.html'
    }],
    animationTime: 800,
    arrowIcon: false
  })

  console.log(instance.isOpen(2))
})

export default OscappsAccordion
