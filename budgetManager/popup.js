let btn = document.getElementById('submit');
let spend = document.getElementById('spend');
let limit = document.getElementById('limit');
let input = document.getElementById('amount');

btn.addEventListener('click', () => {
    let newTotal = 0;
    
    chrome.storage.sync.get(['total', 'limit'],(budget) => {
        if (budget.total){
            newTotal += parseInt(budget.total);
        }

        let amount = input.value;

        if (amount && parseInt(amount) !== NaN){
            newTotal += parseInt(amount);
        }

        chrome.storage.sync.set({'total': newTotal}, () => {

            // notify when limit is reached
            if(amount && newTotal>= budget.limit)
            {
                let notifOptions = {
                    type: 'basic',
                    iconUrl : 'icon48.png',
                    title : 'Limit reached', 
                    message: 'Looks like you have reached maximum limit'
                };
                chrome.notifications.create('limitNotif', notifOptions);
            }
        });

        updateValues();
        input.value = '';
    }); 
});

// updating spend and limit
const updateValues = () => {
    chrome.storage.sync.get(['total','limit'], (budget) => {
        spend.innerText = budget.total;
        limit.innerText = budget.limit;
    })
}

updateValues();