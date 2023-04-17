// Esta función me permite tomar una carta

/**
 * 
 * @param {Array<String>} deck  Ejemplo: ['QD', '2S', '6S', ...]
 * @returns {String} retorna la carta del deck Ejemplo: 2S
 */

export const pedirCarta = (deck) => {

    if ( !deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}