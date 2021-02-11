let menuItem = {
    id: "wikit",
    title : "Wikit",
    contexts : ["selection"]
};

chrome.contextMenus.create(menuItem);

let fixedEncodeURI = (str) => {
    return encodeURI(str).replace(/%5B/g, '[').replace(/%5D/g, '');
} 


chrome.contextMenus.onClicked.addListener((clickedData) => {
    if(clickedData.menuItemId == 'wikit' && clickedData.selectionText)
    {
        let url = 'https://en.wikipedia.org/wiki' + fixedEncodeURI(clickedData.selectionText);

        // open in new window
        /*let createData = {
            url: url,
            type: "popup",
            top: 5,
            left: 5,
            width: screen.availWidth / 2,
            height: screen.availHeight / 2
        }
        chrome.windows.create(createData, () => {})*/

        // opens in new tab
        chrome.tabs.create({url: url})
    }
})