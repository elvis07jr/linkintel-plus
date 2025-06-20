(function () {
  const today = new Date().toISOString().split('T')[0];

  chrome.storage.local.get(["tokenData"], function (result) {
    const tokenData = result.tokenData || { tokens: 0, date: today };

    if (tokenData.date !== today) {
      tokenData.tokens = 0;
      tokenData.date = today;
    }

    if (window.location.href.includes("linkedin.com/jobs/view")) {
      if (tokenData.tokens < 25) {
        tokenData.tokens += 1;
        chrome.storage.local.set({ tokenData });
        console.log("+1 JBL earned! Total today:", tokenData.tokens);

        fetch("https://linkintel-backend.example.com/api/event", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            event: "job_view",
            tokens: tokenData.tokens,
            date: tokenData.date,
            url: window.location.href
          })
        });
      }
    }
  });
})();