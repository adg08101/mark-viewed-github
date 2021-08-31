/**chrome.storage.sync.get("default_name", function (name) {
  document.getElementById("option_name").value = name["default_name"];
});

chrome.storage.sync.get("default_url", function (url) {
  document.getElementById("base_url").value = url["default_url"];
});

document.getElementById("save_btn").addEventListener("click", async () => {
  let name = document.getElementById("option_name").value;
  let url = document.getElementById("base_url").value;
  chrome.storage.sync.set({ "default_name":name }, function () {
    console.log('Success');
  });
  chrome.storage.sync.set({ "default_url":url }, function () {
    alert('Name saved to ' + name + ' & URL saved to ' + url);
    window.close();
  });
});**/
