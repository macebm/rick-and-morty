import React from 'react'

export default function Location({name, type, dimension}){
    return <section>
        <h3>{name}</h3>
        <h3>{type}</h3>
        <h3>{dimension}</h3>
    </section>
} 