function populate() {
    const url = 'https://semegenkep.github.io/itca/superheroes.json';

    axios(url)
        .then(response => populateHeader(response.data))

    axios(url)
        .then(response => populateHeroes(response.data))


}

function populateHeader(obj) {
    let header = document.querySelector("header"),
        h1 = document.createElement("h1"),
        p = document.createElement("p");

    header.appendChild(h1);
    header.appendChild(p);

    h1.innerHTML = obj.squadName;
    p.innerHTML = `Hometown: ${obj.homeTown} // Formed: ${obj.formed}`;
}

function populateHeroes(obj) {

    for (let i = 0; i < 3; i++) {
        // console.log(obj.members[i]);

        let section = document.querySelector("section");
        let article = document.createElement("article");
        section.appendChild(article);

        let h2 = document.createElement("h2");

        h2.innerHTML = obj.members[i].name;
        article.appendChild(h2);

        let firstP = document.createElement("p");
        firstP.innerHTML = `Secret Identify: ${obj.members[i].secretIdentity}`;
        article.appendChild(firstP);

        let secondP = document.createElement("p");
        secondP.innerHTML = `Old: ${obj.members[i].age}`;
        article.appendChild(secondP);

        let thirdP = document.createElement("p");
        thirdP.innerHTML = 'Superpowers:';
        article.appendChild(thirdP);

        let ul = document.createElement("ul");
        article.appendChild(ul);

        let firstLi = document.createElement("li");
        firstLi.innerHTML = obj.members[i].powers[i];
        ul.appendChild(firstLi);

        let secondLi = document.createElement("li");
        secondLi.innerHTML = obj.members[i].powers[i + 1];
        ul.appendChild(secondLi);

        let thirdLi = document.createElement("li");
        thirdLi.innerHTML = obj.members[i].powers[i + 2];
        ul.appendChild(thirdLi);
    }
}

populate();