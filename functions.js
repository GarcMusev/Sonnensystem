function generiereSterne(anzahlSterne){
    let main = document.querySelector("main");
    for(let i = 0; i <= anzahlSterne; i++){
        let newDiv = document.createElement("div");
        newDiv.id = ("star-"+i);
        main.appendChild(newDiv);
    }
}

function articleObserver(){
    const articles = document.querySelectorAll('.article_box');
    const observer = new IntersectionObserver(
        entries =>{
            entries.forEach(entry => {
                entry.target.classList.toggle("show", entry.isIntersecting)
                if(entry.isIntersecting){
                    observer.unobserve(entry.target);
                }
        })
    }
    )
    articles.forEach(article =>{
        observer.observe(article);
    })
}

function formCheck(){
    const form = document.querySelector("form");
    const input = document.getElementsByTagName("input");
    form.addEventListener("submit", function(event) {
        for(let i = 0; i < input.length; i++) {
            if (input[i]) {
                alert("Korrekt! Danke für das Ausfüllen des Formulars!");
                break;
            }
        }
    });
}

formCheck();
articleObserver();
generiereSterne(50);


