
/**
 * 
 * @param {String} carta El parametro es el string del ultimo elemento del array
 * @returns {Number} Retorna 11 o 10 dependiendo de la letra
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}