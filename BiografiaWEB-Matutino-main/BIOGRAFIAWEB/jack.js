function piscarCores() {
    function corAleatoria() {
        return '#' + Math.floor(Math.random()*16777215).toString(16);
    }

    setInterval(function() {
        document.body.style.backgroundColor = corAleatoria();
    }, 500);
}

window.onload = piscarCores;