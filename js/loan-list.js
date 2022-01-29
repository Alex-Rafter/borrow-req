import {Modal} from './bs-esm-min.js'

const loanListTemplate = /*html*/`
<div v-for="item in lendItems">
    <div v-bind:class="[!isDisabled(item.status) ? 'available' : 'loaned', 'd-flex']" >
        <h2>{{item.title}}</h2>
        <p>{{item.description}}</p>
        <p>{{item.url}}</p>
        <button class="btn btn-primary"  :disabled='isDisabled(item.status)' 
        @click="makeModal(item)"
        >{{item.btnText}}</button>
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