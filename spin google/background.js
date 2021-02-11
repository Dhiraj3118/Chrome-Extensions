chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        if(/^https:\/\/www\.google\.com/.test(current_tab_info.url))
        {
            chrome.tabs.insertCSS(null, {file: "styles.css"});
            chrome.tabs.executeScript(null, {file: "foreground.js"}, () => console.log('injected'));
        }
    })
})


// https://www.youtube.com/watch?v=-dhMbVEreII&list=WL&index=72