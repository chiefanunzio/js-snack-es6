// Creare un array di oggetti: ogni oggetto descriverà 
// una bici da corsa con le seguenti proprietà: nome e peso. 
// Stampare a schermo la bici con peso minore.



function bici() {
    const Bici = [

        {
            'nome': 'colnago',
            'peso': 2,

        },
        {
            'nome': 'bianchi',
            'peso': 3,

        },
        {
            'nome': 'legnano',
            'peso': 4,

        },
        {
            'nome': 'campagnolo',
            'peso': 2.5,

        }
    ];

    let lightBike = {
        nome: '',
        peso: Number.MAX_SAFE_INTEGER
    };

    for (let i = 0; i < Bici.length; i++) {

        let bike = Bici[i];
        let {
            nome,
            peso
        } = bike;

        if (peso < lightBike.peso) {

            lightBike = bike;
        }



    }
    console.log(lightBike);

}



//-------------------------------------------------//

// Creare un array di oggetti di bici. 
// Ogni bici avrà diverse proprietà: 
// nome, peso, misura.
// Nome sarà l'unica proprietà da compilare, 
// le altre saranno tutte settate a 0.
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function bici2() {
    let bici = [

        {
            'nome': 'colnago',
            'peso': 0,
            'misura': 0
        },
        {
            'nome': 'bianchi',
            'peso': 0,
            'misura': 0
        },
        {
            'nome': 'legnano',
            'peso': 0,
            'misura': 0
        },
        {
            'nome': 'campagnolo',
            'peso': 0,
            'misura': 0

        }
    ];
    // peso e misura
    // Generare numeri random al posto degli 0 nelle proprietà:

    for (let i = 0; i < bici.length; i++) {
        let bike = bici[i];


        bike.peso = getRandom(0, 10);
        bike.misura = getRandom(20, 54);

    }
    console.log(bici);
    // Usando la destrutturazione creiamo un nuovo array 
    // i cui elementi contengono solo nomi e peso 
    // e stampiamo tutto in console

    for (let i = 0; i < bici.length; i++) {
        let arr = [];

        const bike = bici[i];

        let [nome, peso] = [bike.nome, bike.peso];
        arr.push([nome, peso]);
        console.log(nome,peso + 'kg');

    }

}
function init() {

    // bici();
    bici2();
}

$(document).ready(init);








