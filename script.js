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
        let {nome, peso} = bike;

        if(peso < lightBike.peso){

            lightBike = bike;
        }



    }
    console.log(lightBike);

}
bici();



















// Creare un array di oggetti di squadre di calcio. 
// Ogni squadra avrà diverse proprietà: 
// nome, punti fatti, falli subiti.
// Nome sarà l'unica proprietà da compilare, 
// le altre saranno tutte settate a 0.

// Generare numeri random al posto degli 0 nelle proprietà:
// punti fatti e falli subiti

// Usando la destrutturazione creiamo un nuovo array 
// i cui elementi contengono solo nomi e falli subiti 
// e stampiamo tutto in console