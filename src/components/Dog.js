import React, { Component } from 'react'

export default class Dog extends Component{
    render(){
        const dogUrl= `https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*`
        return(
            <div>
                <h1>Cute Dogs</h1>
                <h3>Johnny Sparkles</h3>
                <img src={dogUrl} alt='dog pic' />
            </div>
        )
    }
}