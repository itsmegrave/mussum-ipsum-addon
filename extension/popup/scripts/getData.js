const getData = function () {

  const httpGetAsync = function (url, callback) {
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
      if (xmlHttp.readyState === 4 && xmlHttp.status === 200)
      callback(xmlHttp.responseText);
  };
  xmlHttp.open('GET', url, true);
  xmlHttp.send(null);
};

return {
  load: function () {
    const quantity = document.getElementById('quantity').value;
    const url = `https://mipsum.herokuapp.com/paragrafos/${quantity}`;
    httpGetAsync(url, getData.fillOutput);
  },
  fillOutput: function (response) {
    let {paragrafos} = JSON.parse(response);
    paragrafos = '<p>' + paragrafos;
    let lastNL = paragrafos.lastIndexOf('\n');
    paragrafos = (paragrafos.substring(0, lastNL) + '</p>').replace('\n', '</p><p>');

    let doc = new DOMParser().parseFromString(paragrafos, 'text/html');

    document.getElementById('output').value = doc.documentElement.textContent;
  }
};
}();
