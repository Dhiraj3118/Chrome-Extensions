let contextMenuItem = {
    "id" : "spendMoney",
    "title" : "Add to money spent",
    "contexts" : ["selection"]
};

chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener((clickData) => {
    // check if clicked on our menu item
    if(clickData.menuItemId == 'spendMoney' && clickData.selectionText)
    {
        if(parseInt(clickData.selectionText) !== NaN)
        {
            let newTotal = 0;
            chrome.storage.sync.get(['total', 'limit'], (budget) => {
                if(budget.total)
                {
                    newTotal += parseInt(budget.total);
                }
                
                newTotal += parseInt(clickData.selectionText);

                chrome.storage.sync.set({'total': newTotal}, () => {
                    if(newTotal >= budget.limit)
                    {
                        let notifOptions = {
                            type: 'basic',
                            iconUrl : 'icon48.png',
                            title : 'Limit reached', 
                            message: 'Looks like you have reached maximum limit'
                        };
                        chrome.notifications.create('limitNotif', notifOptions);
                    }
                })

            })

        }
    }
})


chrome.storage.onChanged.addListener((changes, storageName) => {
    chrome.browserAction.setBadgeText({"text" : `${changes.total.newValue}`})
})