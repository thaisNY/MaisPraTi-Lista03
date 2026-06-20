/*
Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "". 
Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.
*/
//"Artista — Título (mm:ss)".


let  playlist = [
    { 
        titulo: "Are you mine", 
        artista: "Artick Monkeys", 
        duracao: 355 
    },
    { 
        titulo: "American Idiot", 
        artista: "Green Day", 
        duracao: 200 
    },
    { 
        titulo: "Shape of You", 
        artista: "Ed Sheeran", 
        duracao: 233 
    }
];

for (let musica of playlist) {
    console.log(`${musica.artista} - ${musica.titulo} ${(Math.floor(musica.duracao / 60))} : ${(musica.duracao % 60) }`)
}

let total = 0
playlist.forEach(musica => {
    total += musica.duracao;
});

console.log(`A duracao total: ${(Math.floor(total / 60))} : ${(total % 60) }`);