fils = document.getElementsByClassName("fil");
console.log(fils)

fils[0].addEventListener("click", () => {
    if (!fils[0].classList.contains("fil-selected")) {
        window.location.href = "index.html";
    }
});

fils[1].addEventListener("click", () => {
    if (!fils[1].classList.contains("fil-selected")) {
        window.location.href = "index2.html";
    }
});