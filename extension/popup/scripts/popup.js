window.onload = function() {
  document.getElementById("generate").onclick = function() {
    getData.load();
    document.getElementById('copyBtn').disabled = false;
  };
};
