
// Esta función me permite tomar una carta
/**
 * 
 * @param {Array<string>} deck 
 * @returns {string} Retorna la ultima carta del array
 */
export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}