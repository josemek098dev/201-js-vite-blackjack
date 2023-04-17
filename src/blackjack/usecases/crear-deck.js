// Esta función crea un nuevo deck
import _ from  'underscore';
/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCartas Ejemplo: ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck
 */
export const crearDeck = (tiposDeCartas, tiposEspeciales) => {

    if (!tiposDeCartas || tiposDeCartas.length === 0 )
     throw new Error('tiposDeCarta es obligatorio como un arreglo de string')
    
     if (!tiposEspeciales || tiposEspeciales.length === 0 )
     throw new Error('tiposEspeciales es obligatorio como un arreglo de string')

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
    return deck;
}

//export default crearDeck; creamos una exportacion por defecto
//solo podemos tener una exportacion por defecto por archivo