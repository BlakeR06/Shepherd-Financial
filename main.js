const IndividualInvestorNameColumn = document.getElementById('IndividualInvestorNameColumn')
const AmountColumn = document.getElementById('AmountColumn')
const AssetTransferDateColumn = document.getElementById('AssetTransferDateColumn')
const ProviderColumn = document.getElementById('ProviderColumn')
const FeeCommRateColumn = document.getElementById('FeeCommRateColumn')
const Est1stYearRevenueColumn = document.getElementById('Est1stYearRevenueColumn')
const EstRecurringRevenueColumn = document.getElementById('EstRecurringRevenueColumn')
const OpportunitySourceOrReferralColumn = document.getElementById('OpportunitySourceOrReferralColumn')
const NotesAndOrCommentsColumn = document.getElementById('NotesAndOrCommentsColumn')

const amountOfRows = document.getElementById('amountOfRows')

let currentRow = 1
amountOfRows.value = parseInt(currentRow)

function AddNewRow(){

    currentRow += 1
    amountOfRows.value = parseInt(currentRow)

    for(var i = 1; i <= 9; i++){
        var newInput = document.createElement('input')
        if(i === 1){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'IndividualInvestorName' + currentRow)
            newInput.className = 'input'
            IndividualInvestorNameColumn.appendChild(newInput)
        }
        if( i === 2){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'Amount' + currentRow)
            newInput.className = 'input'
            AmountColumn.appendChild(newInput)
        }
        if(i === 3){
            newInput.setAttribute('type', 'date')
            newInput.setAttribute('name', 'AssetTransferDate' + currentRow)
            newInput.className = 'dateInput'
            AssetTransferDateColumn.appendChild(newInput)
        }
        if(i === 4){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'Provider' + currentRow)
            newInput.className = 'input'
            ProviderColumn.appendChild(newInput)
        }
        if(i === 5){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'FeeCommRate' + currentRow)
            newInput.className = 'input'
            FeeCommRateColumn.appendChild(newInput)
        }
        if(i === 6){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'Est1stYearRevenue' + currentRow)
            newInput.className = 'input'
            Est1stYearRevenueColumn.appendChild(newInput)
        }
        if(i === 7){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('input', 'EstRecurringRevenue' + currentRow)
            newInput.className = 'input'
            EstRecurringRevenueColumn.appendChild(newInput)
        }
        if(i === 8){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('Name', 'OpportunitySourceOrReferral' + currentRow)
            newInput.className = 'input'
            OpportunitySourceOrReferralColumn.appendChild(newInput)
        }
        if(i === 9){
            newInput.setAttribute('type', 'text')
            newInput.setAttribute('name', 'NotesAndOrComments' + currentRow)
            newInput.className = 'input'
            NotesAndOrCommentsColumn.appendChild(newInput)
        }
        if(i != 9){
            newInput.required = true;
        }
    }

}

function DeleteRow(){
    if(currentRow != 1){
        currentRow -= 1
        amountOfRows.value = parseInt(currentRow)
        IndividualInvestorNameColumn.lastChild.remove();
        AmountColumn.lastChild.remove();
        AssetTransferDateColumn.lastChild.remove();
        ProviderColumn.lastChild.remove();
        FeeCommRateColumn.lastChild.remove();
        Est1stYearRevenueColumn.lastChild.remove();
        EstRecurringRevenueColumn.lastChild.remove();
        OpportunitySourceOrReferralColumn.lastChild.remove();
        NotesAndOrCommentsColumn.lastChild.remove();
    }
}
