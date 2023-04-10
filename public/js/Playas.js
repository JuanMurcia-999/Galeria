
titulos=["MATEMWE BEACH. ZANZÍBAR ","SARAKINIKO. ISLA DE MILO","CALA MACARELLETA","PALOLEM","BORA BORA","PLAYA BONITA","BENAGIL","PALOMBAGGIA"];


imgBosques=["https://viajes.nationalgeographic.com.es/medio/2013/07/19/77753909_1000x670.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/jai-pr01085_2000x2000.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/ar4399000023_1000x704.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/c46-1423425_1000x692.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/hemis_0603999_1000x677.jpg",
"https://viajes.nationalgeographic.com.es/medio/2017/08/08/playa-bonita-republica-dominicana_01c0e228_1200x798.jpg",
"https://viajes.nationalgeographic.com.es/medio/2017/08/08/benagil-portugal_034c390b.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/126055_1000x666.jpg"];
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