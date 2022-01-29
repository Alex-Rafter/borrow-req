import { createApp } from './petite-vue.js'
import { LoanList } from './Loan-list.js'
import { Modal } from './modal.js'

export function fetchAndRender() {
  fetch('./data/lend.json')
    .then((res) => res.json())
    .then((data) => {
      for (let items of data) {
        Object.assign(items, {
          btnText: 'Request'
        })
      }

      createApp({
        data: data,
        LoanList,
        Modal
      }).mount()
    })
}
