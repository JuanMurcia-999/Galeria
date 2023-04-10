



Urls=[
"https://resizer.glanacion.com/resizer/_fAqhGW5_pUhcB6v3t5RIdi182s=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/O36CJKM4EVDLBEX33AFNV6YZBE.jpg",
"https://resizer.glanacion.com/resizer/YJOvyjjqyMYezPqZ0FvuuBFN1eI=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AVCI4EFKH5AEJJ665JD6TDWQS4.jpg",
"https://resizer.glanacion.com/resizer/l_yFtNr8Mn2VaPJnu7G8NQL81nk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/SNDTLO2AANB35MWPKJSSBOX26Y.jpg",
"https://resizer.glanacion.com/resizer/FjcVKrRTMMKokByIdmvkRLI5ejY=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/HYWUJKTK7NAV5KYCLLMOMMSQ3I.jpg",
"https://resizer.glanacion.com/resizer/tGHMk2PX4x3RAiTLvH10kVB0Uq8=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/TSAX2DKPVRHW3FI3Y5K3YFXPV4.jpg",
"https://resizer.glanacion.com/resizer/BxuDc7F_wRFGNinjA4ir1gR7Oz4=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/MAX5PW32HVCRPJOUMHSYAHGUQ4.jpg",
"https://resizer.glanacion.com/resizer/cJ27q3toDCCmWzl8-mVzcV7Bpdk=/879x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/IOAAAFWOJVCYDMS7RG5JOYTEWI.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_chihuahua-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_arabia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_simpson-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_gobi-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_uyuni-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_namibia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_patagonia-desierto.jpg",
"https://www.arag.es/medien/grafik/blog/viajar/arag_antartida-desierto.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/77753909_1000x670.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/jai-pr01085_2000x2000.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/ar4399000023_1000x704.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/c46-1423425_1000x692.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/hemis_0603999_1000x677.jpg",
"https://viajes.nationalgeographic.com.es/medio/2017/08/08/playa-bonita-republica-dominicana_01c0e228_1200x798.jpg",
"https://viajes.nationalgeographic.com.es/medio/2017/08/08/benagil-portugal_034c390b.jpg",
"https://viajes.nationalgeographic.com.es/medio/2013/07/19/126055_1000x666.jpg"];
titulos=["Sagano Bamboo Forest","Bosque de Sequoias en Yosemite","Selva Valdiviana","Bosque andinopatagónico"," Selva amazónica","Daintree Rainforest"," Krzywy Las","Selva Negra","Desierto de Chihuahua","Desierto de Arabia","Desierto de Simpson","Desierto de Gobi","El Salar de Uyuni","Desierto del Namibs","Desierto de la Patagonia Oriental","La Antártida","MATEMWE BEACH. ZANZÍBAR ","SARAKINIKO. ISLA DE MILO","CALA MACARELLETA","PALOLEM","BORA BORA","PLAYA BONITA","BENAGIL","PALOMBAGGIA"];

let carrucel = document.getElementById('carousel-inner');
let Galeria = document.getElementById('Galeria');


//Cargando elementos del Carrucel 
carrucel.insertAdjacentHTML('beforeend', 
`  <div class="carousel-item active">
        <img src="${Urls[0]}" class="d-block w-100" alt="foto">
        <div class="carousel-caption d-none d-md-block">
          <h5>${titulos[0]}</h5>
        </div>
        
`
);


for (let i=1; i < Urls.length ; i++){ 
    carrucel.insertAdjacentHTML('beforeend', 
    `  <div class="carousel-item ">
            <img src="${Urls[i]}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
              <h5>${titulos[i]}</h5>
            </div>
    `
    );
}
// Fin de los elementos del carrucel


//Cragando elementos de la galeria

for (let i=0; i < Urls.length ; i++){ 
    Galeria.insertAdjacentHTML('beforeend', 
    `  
    <div class="col-lg-4">
    <img class="card-img-top" src="${Urls[i]}" alt="Card image cap">
    </div>  
    `
    );
}

//Fin de los elementos de la Galeria 