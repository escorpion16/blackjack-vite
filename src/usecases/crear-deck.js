import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {array<string>} tiposDeCartas Ejemplo: ['C','D','H','S'];
 * @param {array<string>} tiposEspeciales Ejemplo: ['A','J','Q','K'];
 * @returns {array} Retora un nuevo deck
 */


export const crearDeck = (tiposDeCartas, tiposEspeciales) => {
    
    if ( !tiposDeCartas || tiposDeCartas.length === 0 ) throw new Error('tiposDeCartas es obligatorio');
    if ( !tiposEspeciales || tiposEspeciales.length === 0 ) throw new Error('tiposEspeciales es obligatorio');
    

    let deck = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCartas ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCartas ) {
        for( let esp of tiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}