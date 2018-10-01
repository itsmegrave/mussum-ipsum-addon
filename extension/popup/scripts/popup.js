window.onload = function () {
    const cpBtn = document.getElementById('copy');
    document.getElementById('generate').onclick = function () {
        getData.load();
        cpBtn.innerText = "Copy";
    };
    document.getElementById('copy').onclick = function () {
        copyToClipboard(document.getElementById('output').value);
        cpBtn.innerText = "Copied";
    };
};
