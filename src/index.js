
import OscappsAccordion from 'oscapps-accordion'

import './scss/styles.scss'

document.addEventListener('DOMContentLoaded', () => {
  const instance = new OscappsAccordion(document.getElementById('OscappsAccordion-example-1'), {
    ajaxContent: [{
      indexSection: 1,
      url: './assets/ajaxContent1.html'
    }, {
      indexSection: 3,
      url: './assets/ajaxContent2.html'
    }],
    animationTime: 2000
  })

  const callback = () => {
    alert('Testing awesome plugin')
  }

  const instance2 = new OscappsAccordion(document.getElementById('OscappsAccordion-example-2'), {
    onOpen: callback,
    arrowIcon: false
  })

  const instance3 = new OscappsAccordion(document.getElementById('OscappsAccordion-example-3'))

  console.log(instance)
  console.log(instance2)
  console.log(instance3)

  document.getElementById('show-first').addEventListener('click', () => { instance3.open(0) })
  document.getElementById('close-first').addEventListener('click', () => { instance3.close(0) })
  document.getElementById('toggle-first').addEventListener('click', () => { instance3.toggle(0) })
  document.getElementById('show-all').addEventListener('click', () => { instance3.openAll() })
  document.getElementById('close-first').addEventListener('click', () => { instance3.close(0) })
  document.getElementById('close-all').addEventListener('click', () => { instance3.closeAll(0) })
  document.getElementById('is-open').addEventListener('click', () => { alert(instance3.isOpen(0)) })
})
