
    const fetchPokemon = () =>{
    const Pokename = document.getElementById("Pokename");
    let pokeinput = Pokename.value.toLowerCase();


    const url = `https://pokeapi.co/api/v2/pokemon/${pokeinput}`;

    fetch(url).then ((res) => {
        if(res.status != "200"){
            console.log(res);
            pokeImge("./imagenes/pikachu sad.gif")

        }
        else{
            return res.json();

        }

       


}).then((data) => {
        console.log(data);

        //imagen
        let pokeImg = data.sprites.front_default;
        console.log(pokeImg);
        pokeImge(pokeImg);

        //id
        let pokeID = data.id ;
            console.log (pokeID);
            pokID_F (pokeID);
        // Nombre
        let pokeName = data.name;
        console.log(pokeName);
        pokName_F (pokeName);
    
        // Tipo
        let pokeType = data.types.map (tipo => tipo.type.name);
        console.log (pokeType);
        pokType_F (pokeType);
     
       // Estadísticas:
            // Salud
            let pokeStats1 = data.stats[0].base_stat;
                console.log(pokeStats1);
                hp (pokeStats1);

            // Ataque
            let pokeStats2 = data.stats[1].base_stat;
                console.log(pokeStats2);
                attack (pokeStats2);

            // Defensa
            let pokeStats3 = data.stats[2].base_stat;
                console.log(pokeStats3);
                defense (pokeStats3);

            // Ataque Especial
            let pokeStats4 = data.stats[3].base_stat;
                console.log(pokeStats4);
                attackEsp (pokeStats4);

            //Defensa Especial
            let pokeStats5 = data.stats[4].base_stat;
                console.log(pokeStats5);
                defenseEsp (pokeStats5);
            
            // Velocidad
            let pokeStats6 = data.stats[5].base_stat;
                console.log(pokeStats6);
                speed (pokeStats6);

        // Habilidades
         let pokeAbilities = data.abilities.map (habilidades => habilidades.ability.name);
        console.log(pokeAbilities);
        pokAbilities_F (pokeAbilities); 

        // Movimientos  
        let pokeMoves = data.moves.map (movimientos => movimientos.move.name);
        console.log (pokeMoves);
        pokMoves_F (pokeMoves);

    })


}


//imagen
const pokeImge = (url) =>{
    const pokeImg = document.getElementById("poke-img");
    pokeImg.src = url;


}

//numero del pokemon
const pokID_F = (pokeID) => {
    const id = document.getElementById ("id");
    id.innerHTML = ("# " + pokeID);
}

//nombre del pokemon
const pokName_F = (pokeName) => {
    const nombre = document.getElementById ("nombre");
    nombre.innerHTML = (" " + pokeName.toUpperCase());
}

// Tipo
const pokType_F = (pokeType) => {
    const tipo = document.getElementById ("tipo");
    tipo.innerHTML = (" \n" + pokeType);
}

 //Habilidades
 const pokAbilities_F = (pokeAbilities) => {
    const habilidades = document.getElementById ("habilidades");
    habilidades.innerHTML = ("Habildades: " +pokeAbilities + "\n");
} 

// Movimientos
const pokMoves_F = (pokeMoves) => {
    const movimientos = document.getElementById ("movimientos");
    movimientos.innerHTML = (pokeMoves + "\n");

}



//cambio de Estadísticas:
    //Salud
    const hp = (pokeStats1) => {
        const estadisticas = document.getElementById ("salud");
        estadisticas.innerHTML = ("Salud: " + pokeStats1);

    }

    //Ataque
    const attack = (pokeStats2) => {
        const estadisticas = document.getElementById ("ataque");
        estadisticas.innerHTML = ("Ataque: " + pokeStats2);
    }

    //Defensa
    const defense = (pokeStats3) => {
        const estadisticas = document.getElementById ("defensa");
        estadisticas.innerHTML = ("Defensa: " + pokeStats3);
    }

    //Ataque Especial
    const attackEsp = (pokeStats4) => {
        const estadisticas = document.getElementById ("ataqueEsp");
        estadisticas.innerHTML = ("Ataque Especial: " + pokeStats4);
    }

    //Defensa Especial
    const defenseEsp = (pokeStats5) => {
        const estadisticas = document.getElementById ("defensaEsp");
        estadisticas.innerHTML = ("Defensa Especial: " + pokeStats5);
    }

    //Velocidad
    const speed = (pokeStats6) => {
        const estadisticas = document.getElementById ("velocidad");
        estadisticas.innerHTML = ("Velocidad: " + pokeStats6);
    }



