chrome.extension.sendMessage({}, function (response) {
  const readyStateCheckInterval = setInterval(function () {
    if (document.readyState === "complete") {
      clearInterval(readyStateCheckInterval);

      chrome.storage.sync.get('rickRollPercentage', function (items) {
        takeOverClickEvents(items.rickRollPercentage);
      });
    }
  }, 10);
});

function takeOverClickEvents(probability) {
  const links = document.getElementsByTagName("a")

  for (let i = 0; i < links.length; i++) {
    const link = links[i];
    link.addEventListener('click', rewriteLinkClick(probability))
    link.addEventListener('auxclick', rewriteLinkClick(probability))
  }
}

function rewriteLinkClick(probability) {
  return function (event) {
    const number = Math.random();
    console.log(`Rick rolling if ${number} <= ${probability}`)

    if (number <= probability) {
      event.preventDefault()
      window.location = 'https://www.youtube.com/watch?v=oHg5SJYRHA0'
    }
  }
}
