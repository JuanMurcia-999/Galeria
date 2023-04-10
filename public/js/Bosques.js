titulos=["Sagano Bamboo Forest","Bosque de Sequoias en Yosemite","Selva Valdiviana","Bosque andinopatagónico"," Selva amazónica","Daintree Rainforest"," Krzywy Las","Selva Negra"];


imgBosques=["https://resizer.glanacion.com/resizer/jCj5gJSGj__vKcZPg93llbJvsuA=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PZBYQNYUTZAMVPU2RHU75YAU2E.jpg",
"https://resizer.glanacion.com/resizer/_fAqhGW5_pUhcB6v3t5RIdi182s=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/O36CJKM4EVDLBEX33AFNV6YZBE.jpg",
"https://resizer.glanacion.com/resizer/YJOvyjjqyMYezPqZ0FvuuBFN1eI=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AVCI4EFKH5AEJJ665JD6TDWQS4.jpg",
"https://resizer.glanacion.com/resizer/l_yFtNr8Mn2VaPJnu7G8NQL81nk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SNDTLO2AANB35MWPKJSSBOX26Y.jpg",
"https://resizer.glanacion.com/resizer/FjcVKrRTMMKokByIdmvkRLI5ejY=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HYWUJKTK7NAV5KYCLLMOMMSQ3I.jpg",
"https://resizer.glanacion.com/resizer/tGHMk2PX4x3RAiTLvH10kVB0Uq8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TSAX2DKPVRHW3FI3Y5K3YFXPV4.jpg",
"https://resizer.glanacion.com/resizer/BxuDc7F_wRFGNinjA4ir1gR7Oz4=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MAX5PW32HVCRPJOUMHSYAHGUQ4.jpg",
"https://resizer.glanacion.com/resizer/cJ27q3toDCCmWzl8-mVzcV7Bpdk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IOAAAFWOJVCYDMS7RG5JOYTEWI.jpg"];

let Galeria = document.getElementById('Galeria');
let Modales = document.getElementById('Modales');


//Cragando elementos de la galeria
for (let i=0; i < imgBosques.length ; i++){ 
    Galeria.insertAdjacentHTML('beforeend', 
    `  
    <a href="#!" class="unitimg" data-bs-toggle="modal" data-bs-target="#imagen${i}" >
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

    <div class="modal-dialog  modal-dialog-centered " > 
    <div class="modal-content ">
          
      <div class="card modal-element" style="width:end;">
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
//Fin de los modales