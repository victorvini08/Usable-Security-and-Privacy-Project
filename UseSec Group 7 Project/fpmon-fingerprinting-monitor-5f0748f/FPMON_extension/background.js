chrome.runtime.onMessage.addListener((e, t) => {
  if (
    "content" === e.from &&
    "showPageAction" === e.subject &&
    "string" == typeof e.score
  ) {
    var o = JSON.parse(e.score),
      r = o.coverage_categories.split("(")[1].split(")")[0].split("/")[0],
      s = o.aggressive_coverage.split("(")[1].split(")")[0].split("/")[0],
      i = "green";
    (r > 11 || s > 3) && (i = "yellow"),
      (r > 16 || s > 6) && (i = "red"),
      "red" === i &&
        chrome.browserAction.setIcon({
          path: "/icons/icon_red_128.png",
          tabId: t.tab.id,
        }),
      "yellow" === i &&
        chrome.browserAction.setIcon({
          path: "/icons/icon_yellow_128.png",
          tabId: t.tab.id,
        }),
      "green" === i &&
        chrome.browserAction.setIcon({
          path: "/icons/icon_green_128.png",
          tabId: t.tab.id,
        }),
      chrome.browserAction.setBadgeText({ text: r, tabId: t.tab.id });
  }
});
