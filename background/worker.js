var btn = document.getElementById("show-btn");
btn.addEventListener("click", getAllTabsFinal);

async function getAllTabsFinal(){
    let queryOptions = {};
    let tabs = await chrome.tabs.query(queryOptions);
    tabs.forEach(tab => {
        console.log(tab.url)
    });
    
}