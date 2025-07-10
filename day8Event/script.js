const mainDiv = document.querySelector("#main");

addEventListener('keypress', function (e) {
    if (e.key === 'g') {
        mainDiv.style.marginLeft = 20 + "%";
    }

    if (e.key === 'h') {
        mainDiv.style.marginRight = 40 + "%";
    }

})


