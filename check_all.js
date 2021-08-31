/**let form = document.getElementById("form");
let link = document.getElementById("link");
let url_var = null;
let url_name = null;
let params_cout = 10

chrome.storage.sync.get("default_url", function(url) {
  url_var = url["default_url"];
  const label = document.createTextNode(url_var);
  let intro = document.getElementById("intro");
  let intro_txt = document.createTextNode("Enter params and press Enter.");
  document.getElementById("link").appendChild(label);
  const params = document.getElementById("params_place");
  let has_params = false;

  for (let i = 1;i < params_cout;i++) {
    let index = url_var.indexOf("[p" + i + "]");

    if (index > -1) {
      let p_input = document.createElement("input");
      let p_check = document.createElement("input");

      p_input.type = "text";
      p_input.id = "p" + i;
      p_input.placeholder = "Param " + i;
      p_check.type = "checkbox";
      p_check.id = "save_p" + i + "_param";
      p_check.title = "Save";
      let br = document.createElement('br');

      params.appendChild(p_input);
      params.appendChild(p_check);
      params.appendChild(br);

      has_params = true;
    }

    if (document.getElementById("save_p" + i + "_param")) {
      let save_param = document.getElementById("save_p" + i + "_param");
      save_param.addEventListener("click", function (mode) {
        let value = document.getElementById("p" + i).value;
        if (!save_param.checked)
          value = "";

        chrome.storage.sync.set({ ["param_" + i]:value }, function () {
          if (value == "")
            value = "null";

          console.log("Default Param " + i + " set to " + value);
        });
      })

      chrome.storage.sync.get("param_" + i, function(param) {
        if (param["param_" + i]) {
          document.getElementById("p" + i).value = param["param_" + i];
          document.getElementById("save_p" + i + "_param").checked = true;
        }
      });
    }

    if (document.getElementById("p" + i)) {
      let p = document.getElementById("p" + i);
      p.addEventListener("keypress", function (event) {
        if (document.getElementById("save_p" + i + "_param").checked && event.key !== 'Enter')
          document.getElementById("save_p" + i + "_param").click();
      });
    }
  }

  if (!has_params)
    intro_txt = document.createTextNode("No params found.");

  intro.appendChild(intro_txt);
});

chrome.storage.sync.get("default_name", function(name) {
  url_name = name["default_name"];
  const label = document.createTextNode(url_name);
  document.getElementById("config_name").appendChild(label);
});

form.addEventListener("keypress", async (event) => {
  if (event.key === 'Enter') {
    for (let i = 1;i < params_cout;i++) {
      if (document.getElementById("p" + i)) {
        if (document.getElementById("p" + i).value.trim() === "") {
          alert("Data input errors!");
          return;
        }
      }
    }

    const http = new XMLHttpRequest();

    for (let i = 1;i < params_cout;i++) {
      if (document.getElementById("p" + i)) {
        url_var = url_var.toString().replace("[p" + i + "]",
            document.getElementById("p" + i).value.toString());
      }
    }

    http.open("GET", url_var["default_url"]);
    http.send();
    http.onreadystatechange = function () {
      if (this.readyState == 4) {
        link.setAttribute('href', url_var.toString())
        link.click();
      } else {
        alert('Something went wrong!')
      }
    }
  }
});
**/
let check = document.getElementById("check");

check.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

    chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: setCheckedToAll,
    });
});

function setCheckedToAll() {
    let checkboxes = document.getElementsByName("viewed")
    for (let i = 0;i < checkboxes.length;i++)
        checkboxes[i].click()
}