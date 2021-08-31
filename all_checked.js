/**let name = 'ZOHO';
let url = 'https://sprints.zoho.com/team/vertrax#itemdetails/P24/I[p1]';

chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ "default_name":name }, function () {
    console.log('Default name set to ' + name);
  });
  chrome.storage.sync.set({ "default_url":url }, function () {
    console.log('Default url set to ' + url);
  });
});**/
