const arrCarrello = [];

const getLibrary = async () => {
  try {
    let libreria = await fetch("https://striveschool-api.herokuapp.com/books", {
      method: "GET",
    });
    if (libreria.ok) {
      let libri = await libreria.json();

      console.log("libreria", libri);

      let row = document.getElementById("lineaDelleCards");

      libri.forEach((element) => {
        row.innerHTML += `
      <div class="card p-0 col-sm-2 col-md-3 col-lg-4 mb-2">
      <img src="${element.img}" class="card-img-top" style="height: 65%" alt="...">
      <div class="card-body d-flex flex-column justify-content-between">
      <h5 class="card-title">${element.title}</h5>
      <p class="card-text"><span class="bold">Price</span>: ${element.price}</p>
      <p class="card-text"><span class="bold">Category</span>: ${element.category}</p>
      <a class="btn btn-primary bottone">Scarta</a>
      <a class="btn btn-warning bottone">Aggiungi al carrello</a>
      </div>
      </div>
      `;
      });
      const btns = document.getElementsByClassName("btn btn-primary bottone");
      Array.from(btns).forEach((btn) => {
        btn.addEventListener("click", (event) => {
          const cardToRemove = event.target.closest(".card");
          cardToRemove.parentNode.removeChild(cardToRemove);
        });
      });
    } else {
      throw "c'è stato un errore dentro l'if";
    }
  } catch (err) {
    console.log(err);
  }
};

getLibrary();
