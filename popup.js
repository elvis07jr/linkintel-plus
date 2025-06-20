document.getElementById("refresh").addEventListener("click", () => {
  chrome.storage.local.get(["tokenData"], function (result) {
    const tokens = result.tokenData ? result.tokenData.tokens : 0;
    document.getElementById("tokenCount").textContent = tokens + " JBL";
  });
});

chrome.storage.local.get(["tokenData"], function (result) {
  const tokens = result.tokenData ? result.tokenData.tokens : 0;
  document.getElementById("tokenCount").textContent = tokens + " JBL";
});