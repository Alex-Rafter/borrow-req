// import {Modal} from './bs-esm-min.js'
import Modal from 'bootstrap/js/dist/modal';

const loanListTemplate = /*html*/`
<div v-for="item in lendItems">
<div class="card w-75 mx-auto bg-white my-2">
<div class="flex-c card-header bg-white">
    <h4 class="h2 mb-0 text-uppercase">{{item.title}}</h4>
    <div class="flex-cen align-items-center">
    <button href="#" class="btn btn-outline-dark" :disabled='isDisabled(item.status)' 
    @click="makeModal(item)">{{item.btnText}}</button>
  </div>
</div>

    <div class="card-body flex-c">
      <div>
        <h5 class="w-100 fs-5 fw-light card-title w-50">{{item.description}}</h5>
        <p class="card-text fw-light w-100">
          <a href="" class="text-dark text-decoration-none">
          {{item.url}}
          </a>
        </p>
      </div>

     

    </div>
  </div>
</div>

`


export function LoanList(props) {
    return {
        $template: loanListTemplate,
        lendItems : props.dataPassed,
        isDisabled(status) {
            return (status === 'Request') ? false : true
        },
        formForm(item) {
                item.status = 'Requested'
                fetch(`https://docs.google.com/forms/d/e/1FAIpQLSfxOEOVuiuAWuz2ItL08MyeFDXUGBWHCWOj8My8isYBX0ilGQ/formResponse?entry.664743125=${item.title}&entry.1206457380=${item.description}&entry.430716838=Another%20Url%20Example1`, {mode:'no-cors'}).then(console.log(item.title))
                .then(()=>{
                    // item.status = 'Requested'
                 })
            },
            makeModal(item){
                var myModal = new Modal(document.getElementById('exampleModal'))
                document.getElementById('exampleModal').setAttribute('data-loan', JSON.stringify(item))
                myModal.show()
            }
    }
  }