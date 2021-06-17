// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti = [
    {
        nome: 'Duchessa',
        eta: 7,
        colore: 'bianco',
        genere: 'f'
    },
    {
        nome: 'Romeo',
        eta: 10,
        colore: 'arancione',
        genere: 'm'
    },
    {
        nome: 'Minou',
        eta: 2,
        colore: 'bianco',
        genere: 'f'
    },
    {
        nome: 'Matisse',
        eta: 2,
        colore: 'rosso',
        genere: 'm'
    },
    {
        nome: 'Bizet',
        eta: 2,
        colore: 'grigio',
        genere: 'm'
    },
    {
        nome: 'Hit',
        eta: 7,
        colore: 'yellow',
        genere: 'm'
    }
];
document.getElementById('gatti').innerHTML = '';

gatti.forEach((gatto) => { 
    let {nome , colore , genere} = gatto;
    document.getElementById('gatti').innerHTML+= `<li> <i class="fas fa-cat ${colore} "></i> ${nome} è un gatto ${colore} </li>`;
    
 } );

const pink = '#EEA7B3';
const blu = '#211CBB';


const newCats = gatti.map((gatto) =>{
    const nome = gatto.nome;
    const eta = gatto.eta;
    const colore = gatto.colore;
    const genere = gatto.genere;
    const coloreFiocco = (genere == "f")? pink : blu;
    const opacity = eta / 10;

    return {
        nome ,
        eta ,
        colore , 
        genere ,
        fiocco :{
            colore : coloreFiocco,
            opacity
        }
    }
});

// newCats.forEach((cat) => {
//     document.getElementById('gatti_f').innerHTML+= `<li> ${cat.nome} <i class="fas fa-ribbon ${cat.genere} " style=opacity:${cat.fiocco.opacity}></i></li>`;
// });

const maleCats = newCats.filter((element) => {
    return element.genere === "m";

});

maleCats.forEach((cat) => {
    document.getElementById('gatti_m').innerHTML+= `<li> ${cat.nome} <i class="fas fa-ribbon ${cat.genere} " style=opacity:${cat.fiocco.opacity}></i></li>`;
    console.log(cat.fiocco.colore);
});

const femaleCats = newCats.filter((element) => {
    return element.genere === "f";

});

femaleCats.forEach((cat) => {
    document.getElementById('gatti_f').innerHTML+= `<li> ${cat.nome} <i class="fas fa-ribbon ${cat.genere} " style=opacity:${cat.fiocco.opacity}></i></li>`;
    
});

// gatti.forEach((gatto) => { 
//     let {nome , colore , genere} = gatto;
//     if (genere == 'f'){
//         document.getElementById('gatti_f').innerHTML+= `<li class=" ${genere} "> <i class="fas fa-cat ${colore} "></i> ${nome} è un gatto ${colore} </li>`;
//     }
//     else{
//         document.getElementById('gatti_m').innerHTML+= `<li class=" ${genere} "> <i class="fas fa-cat ${colore} "></i> ${nome} è un gatto ${colore} </li>`;
//     }
    
// } );

let catsFemaleMale = [...femaleCats , ...maleCats];
const catsFemaleMaleSemp = catsFemaleMale.map((element) => {
    const{nome , colore , fiocco} = element;
    return{
        nome,
        colore,
        fiocco
    }

});

catsFemaleMaleSemp.forEach((cat) => {
    document.getElementById('gatti_ordinati').innerHTML+= `<li> nome: ${cat.nome} <i class="fas fa-ribbon" style='color:${cat.fiocco.colore}; opacity:${cat.fiocco.opacity} '></i> </li>`;
});


