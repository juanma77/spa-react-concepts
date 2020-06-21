import React, { Component } from 'react';

export default class CarItemComponent extends Component {

    render() {
        const { car } = this.props; 

        return (

            <li>    
                <p>Nombre: { car.name }</p>
                <p>Compañía: { car.company }</p>
            </li>

        )
    }


}