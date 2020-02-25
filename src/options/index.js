function saveOptions() {
  const percentage = document.getElementById('percentage').value;
  chrome.storage.sync.set({
    rickRollPercentage: percentage
  }, function () {
    const status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function () {
      status.textContent = '';
    }, 750);
  });
}

function restoreOptions() {
  chrome.storage.sync.get({
    rickRollPercentage: .02
  }, function (items) {
    document.getElementById('percentage').value = items.rickRollPercentage;
  });
}

document.addEventListener('DOMContentLoaded', restoreOptions);
document.getElementById('save').addEventListener('click', saveOptions);
