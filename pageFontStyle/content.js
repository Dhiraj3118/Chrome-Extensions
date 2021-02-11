chrome.runtime.sendMessage({todo: "ShowPageAction"});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if(request.todo == 'changeColor')
    {
        var color = request.color;
        let element = document.getElementById('overview');
        // console.log(element);
        element.style.color = color;
    }
})


// content scripts cannot use all chrome api so we talk to other js files using messages