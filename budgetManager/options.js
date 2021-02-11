let resetBtn = document.getElementById('resetTotal');
let setBtn = document.getElementById('setLimit');

resetBtn.addEventListener('click', () => {
    chrome.storage.sync.set({'total': 0});
    let notifOptions = {
        type: 'basic',
        iconUrl : 'icon48.png',
        title : 'Budget Reset', 
        message: 'Budget amount is set to 0'
    };
    chrome.notifications.create('resetNotif', notifOptions);
    // close();
})

setBtn.addEventListener('click', () => {
    let limit = document.getElementById('limit').value;
    if(limit && parseInt(limit) !== NaN)
    {
        chrome.storage.sync.set({'limit': limit}, () => {
            close();
        });
    }
})

chrome.storage.sync.get('limit', (budget) => {
    if(budget.limit)
    {
        document.getElementById('limit').value = budget.limit;
    }
})