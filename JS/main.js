

window.addEventListener('DOMContentLoaded', (e)=>{

    let number = document.querySelector('#Numero')
    let Operator = document.querySelector('#Operadora')
    let status = document.querySelector('#Status')
    let Tbody = document.querySelector('tbody')
    let table = document.querySelector('table')
    
    let button = document.querySelector('#btn')

    let input = document.querySelector('input')

    input.addEventListener('keydown', (e)=>{
        if(e.target.value == ''){
            Tbody.classList.remove('validNumber')
            Tbody.classList.remove('invalidNumber')
            Operator.innerHTML = ''
            number.innerHTML = ''
            status.innerHTML = ''
        }
    })
    input.addEventListener('keyup', (e)=>{
        if(e.target.value == ''){
            Tbody.classList.remove('validNumber')
            Tbody.classList.remove('invalidNumber')
            Operator.innerHTML = ''
            number.innerHTML = ''
            status.innerHTML = ''
        }
    })

    button.addEventListener('click', ()=>{
        table.style.visibility = 'visible'
        let inputNumber = document.querySelector('#number').value.trim()

        const NumberLength = ()=>{

            if((inputNumber.length == 9) && (inputNumber.split('')[0] == '9')  ){
                return true
            }else{
                return false
            }
        }

        const NumberOperator = ()=>{
            newInputNumber = inputNumber.split('')
            
            if((newInputNumber[1] == '2') || (newInputNumber[1] == '3') || (newInputNumber[1] == '4')){
                return 'Unitel'
            }else if( (newInputNumber[1] == '5')){
                return 'Africell'
            }else if( (newInputNumber[1] == '9') || (newInputNumber[1] == '1') || (newInputNumber[1] == '8') ){
                return 'Movicel'
            }else{
                return 'Desconhecido'
            }
        }

        
        if( (NumberLength() == true) ){
            Operator.innerHTML = NumberOperator()
            number.innerHTML = inputNumber
            status.innerHTML = 'Válido'
            Tbody.classList.add('validNumber')
            Tbody.classList.remove('invalidNumber')
           
        }else{
            Operator.innerHTML ='Desconhecido'
            number.innerHTML = inputNumber
            status.innerHTML = 'Inválido'
            Tbody.classList.add('invalidNumber')
            Tbody.classList.remove('validNumber')
           
        } 

        
    })
})

