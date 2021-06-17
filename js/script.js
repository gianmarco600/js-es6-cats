// Milestone 1 Definire un array di oggetti; ogni oggetto rappresenta un gatto, che è caratterizzato da: nome, età, colore e sesso.
// Tramite il forEach(), stampare in pagina tutti i gattini, ciascuno con il proprio colore e il proprio nome.

const gatti = [
    {
        nome: 'Duchessa',
        eta: 4,
        colore: 'bianco',
        sesso: 'f'
    },
    {
        nome: 'Romeo',
        eta: 4,
        colore: 'bianco',
        sesso: 'f'
    },
    {
        nome: 'Minou',
        eta: 4,
        colore: 'bianco',
        sesso: 'f'
    },
    {
        nome: 'Matisse',
        eta: 4,
        colore: 'bianco',
        sesso: 'f'
    },
    {
        nome: 'Bizet',
        eta: 4,
        colore: 'bianco',
        sesso: 'f'
    }
];
document.getElementById('gatti').innerHTML = '';

gatti.forEach((gatto) => { 
    let {nome , colore} = gatto;
    document.getElementById('gatti').innerHTML+= '<li>' +  nome + " e' un gatto" + colore + ' </li>';
 } )