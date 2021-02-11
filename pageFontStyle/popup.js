let color = document.querySelector('input');
let colorVal = '';
color.addEventListener('change', () => {
    colorVal = color.value;
})

let btn = document.querySelector('button');

btn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, {todo: 'changeColor', color: colorVal})
    })
})