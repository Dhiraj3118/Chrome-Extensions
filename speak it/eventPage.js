let menuItem = {
    id: "speakIt",
    title : "SpeakIt",
    contexts : ["selection"]
}

chrome.contextMenus.create(menuItem);

chrome.contextMenus.onClicked.addListener((clickedData) => {
    if(clickedData.menuItemId == 'speakIt' && clickedData.selectionText)
    {
        // this is chrome api which speaks the input text at given rate
        chrome.tts.speak(clickedData.selectionText, {rate: 0.7});
    }
})