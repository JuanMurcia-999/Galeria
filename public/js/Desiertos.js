titulos=["Desierto de Chihuahua","Desierto de Arabia","Desierto de Simpson","Desierto de Gobi","El Salar de Uyuni","Desierto del Namibs","Desierto de la Patagonia Oriental","La Antártida"];


imgBosques=["https://www.arag.es/medien/grafik/blog/viajar/arag_chihuahua-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_arabia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_simpson-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_gobi-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_uyuni-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_namibia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_patagonia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_antartida-desierto.jpg"];

let Galeria = document.getElementById('Galeria');
let Modales = document.getElementById('Modales');


//Cragando elementos de la galeria
for (let i=0; i < imgBosques.length ; i++){ 
    Galeria.insertAdjacentHTML('beforeend', 
    `  
    <a href="#!" class="col-lg-4" data-bs-toggle="modal" data-bs-target="#imagen${i}" >
    <div class="contenedorImg">
      <img class="card-img-top" src="${imgBosques[i]}" alt="Card image cap" ">
      </div>
    </a>
    `
    );
} 
//Fin de los elementos de la Galeria 


//Inicio de los modales

for (let i=0; i < imgBosques.length ; i++){ 
    Modales.insertAdjacentHTML('beforeend', 
    `  
    <div tabindex="-1" aria-labelledby="imagen${i}" aria-hidden="true" class="modal fade"  id="imagen${i}" > 
    <div class="modal-dialog  modal-dialog-centered" > 
    <div class="modal-content">
          



      <div class="card" style="width:end;">
        <img src="${imgBosques[i]}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${titulos[i]}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem natus rerum quibusdam harum unde ad odio vel alias ex deleniti quasi ut, blanditiis doloribus eligendi nesciunt, nemo delectus, impedit perferendis.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nam vitae consectetur libero aspernatur, pariatur veritatis quas soluta quam deleniti natus eius a tenetur sint fuga, doloremque atque reiciendis fugit?
          </p>
        </div>
      </div>





    </div> 
  </div>

    </div>
    `
    );
}