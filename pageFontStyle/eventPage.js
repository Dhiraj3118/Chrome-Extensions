chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.todo == "ShowPageAction")
    {
        chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
            chrome.pageAction.show(tabs[0].id);
        })
    }
})
