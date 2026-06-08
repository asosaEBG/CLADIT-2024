import React from 'react'
import Segmento from './Segmento';

const Segmentacion = ({ begin, end, programa }) => {
    const programa_filtrado = programa.slice(begin, end + 1);
    return programa_filtrado.map((segmento, i) => (
        <Segmento key={i} segmento={segmento} />
    ))
}

export default Segmentacion