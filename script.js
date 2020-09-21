function showCards(pokemondex){
    console.log(pokemondex);
    // Codigo para la tarjeta
    var card = document.createElement('div');
    card.className = "card col-3 bg-transparent";
    card.addEventListener ("click", showModal );
    function showModal (){
        
        alert("si jala");

        
    }

    // Codigo para el contenedor
    var cardContainer = document.getElementById('card-container');
    modalTarget = document.getElementsByTagName("#mymodal");
    cardContainer.appendChild(card);

    // Codigo para la imagen
    var img = document.createElement('img');
    img.className = "card-img-top "
    img.src =  pokemondex.art_url;
    card.appendChild(img);

    // Codigo para el card body
    var cardBody = document.createElement('div');
    cardBody.className = "card-body";

    //Codigo para el titulo
    var title = document.createElement('h5');
    title.className = " text-center font-weight-bold";
    title.innerHTML = pokemondex.name;
    
    card.appendChild(cardBody);
    cardBody.appendChild(title);
    // cardBody.appendChild(description);

    console.log(cardContainer);
    console.log(card);
    console.log(title);
}

for(var i=0; i<pokemondex.length; i++){
    showCards(pokemondex[i]);
}

