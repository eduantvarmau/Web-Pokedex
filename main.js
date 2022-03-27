const fetchPokemon = () => {
    const pokeName = document.getElementById("pokeName");
    let pokeInput = pokeName.value.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./src/img/sad-pikachu.gif")
        } else {
            return res.json();
        }

    }).then((data) => {
        let pokeImg = data.sprites.front_default;
        let pokeId = " " + data.name;
        let pokeNo = " " + data.id;
        let pokeType = " " + data.types[0].type.name;
        let pokeHeight = " " + data.height;
        let pokeWeight = " " + data.weight;
        //STATS
        //let pokeEstd = data.stats[0].stat.name + ":" + data.stats[0].base_stat;
        let pokeHp = "" + data.stats[0].base_stat;
        let pokeAttack = "" + data.stats[1].base_stat;
        let pokeDef = "" + data.stats[2].base_stat;
        let pokeSata = " " + data.stats[3].base_stat;
        let pokeSdef = "" + data.stats[4].base_stat;
        let pokeSpeed = "" + data.stats[5].base_stat;

        let pokeMov = "" + data.moves[0].move.name;

        console.log(pokeImg);
        console.log(pokeId);
        console.log(pokeNo);
        console.log(pokeType);
        console.log(pokeHeight);
        console.log(pokeWeight);
        //console.log(pokeEstd);
        console.log(pokeMov);
        pokeImage(pokeImg);
        pokeIdC(pokeId);
        pokeNoC(pokeNo);
        pokeTypeC(pokeType);
        pokeHeightC(pokeHeight);
        pokeWeightC(pokeWeight);
        //pokeEstdC(pokeEstd);
        //STATS
        pokeHpC(pokeHp);
        pokeAttackC(pokeAttack);
        pokeDefC(pokeDef);
        pokeSataC(pokeSata);
        pokeSdefC(pokeSdef);
        pokeSpeedC(pokeSpeed);

        pokeMovC(pokeMov);
    })
}

//fetchPokemon();

//Name
const pokeIdC = (url) => {
    const pokeId = document.getElementById("pokeId");
    pokeId.innerHTML = url;
}
const pokeNoC = (url) => {
        const pokeNo = document.getElementById("pokeNo");
        pokeNo.innerHTML = url;
    }
    //Type
const pokeTypeC = (url) => {
        const pokeType = document.getElementById("pokeType");
        pokeType.innerHTML = url;
    }
    //Type
const pokeHeightC = (url) => {
        const pokeHeight = document.getElementById("pokeHeight");
        pokeHeight.innerHTML = url;
    }
    //Type
const pokeWeightC = (url) => {
        const pokeWeight = document.getElementById("pokeWeight");
        pokeWeight.innerHTML = url;
    }
    //Stat
    //const pokeEstdC = (url)=>{
    //    const pokeEstd = document.getElementById("pokeEstd");
    //    pokeEstd.innerHTML = url;
    //}
    //STATS
const pokeHpC = (url) => {
    const pokeHp = document.getElementById("pokeHp");
    pokeHp.innerHTML = url;
}
const pokeAttackC = (url) => {
    const pokeAttack = document.getElementById("pokeAttack");
    pokeAttack.innerHTML = url;
}
const pokeDefC = (url) => {
    const pokeDef = document.getElementById("pokeDef");
    pokeDef.innerHTML = url;
}
const pokeSataC = (url) => {
    const pokeSata = document.getElementById("pokeSata");
    pokeSata.innerHTML = url;
}
const pokeSdefC = (url) => {
    const pokeSdef = document.getElementById("pokeSdef");
    pokeSdef.innerHTML = url;
}
const pokeSpeedC = (url) => {
    const pokeSpeed = document.getElementById("pokeSpeed");
    pokeSpeed.innerHTML = url;
}




//Mov
const pokeMovC = (url) => {
        const pokeMov = document.getElementById("pokeMov");
        pokeMov.innerHTML = url;
    }
    //Img
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg");
    pokeImg.src = url;
}

//pokeImage("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png");

/** audio*/
let x = document.getElementById("myAudio");

function playAudio() {
    x.play();
}

function pauseAudio() {
    x.pause();
}