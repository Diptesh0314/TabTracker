var btn = document.getElementById("show-btn");
btn.addEventListener("click", getAllTabsFinal);

async function getAllTabsFinal(){
    console.log("hello world");
    let queryOptions = { active: true, lastFocusedWindow: true };
    let tabs = await chrome.tabs.query(queryOptions);
    console.log(tabs)
}
