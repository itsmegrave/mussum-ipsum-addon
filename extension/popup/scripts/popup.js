window.onload = function () {
    const copyBtn = document.getElementById('copy');
    const genBtn = document.getElementById('generate');
    genBtn.onclick = function () {
        getData.load();
        copyBtn.innerText = "Cópia";
    };
    copyBtn.onclick = function () {
        copy();
        copyBtn.innerText = "Copiado";
    };
};

function copy() {
    const textarea = document.getElementById('output');
    textarea.select();
    document.execCommand("copy");
    textarea.selectionEnd = textarea.selectionStart;
    textarea.blur();
    window.getSelection().removeAllRanges();
};