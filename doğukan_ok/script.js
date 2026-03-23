function openPanel(){
    document.getElementById("panel").classList.add("active");
}

function closePanel(){
    document.getElementById("panel").classList.remove("active");
}


// scroll animasyonu
const items = document.querySelectorAll(".timeline-item");

window.addEventListener("scroll", () => {
    items.forEach(item => {
        const top = item.getBoundingClientRect().top;
        if(top < window.innerHeight - 100){
            item.classList.add("show");
        }
    });
});
