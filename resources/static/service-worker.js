  if ('serviceWorker' in navigator) {
    alert("Will the service worker register?");
    navigator.serviceWorker.register('service-worker.js')
      .then(function(reg){
        alert("Yes, it did.");
      }).catch(function(err) {
        alert("No it didn't. This happened: ", err)
      });
  }