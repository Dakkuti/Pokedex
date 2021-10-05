import React from 'react'
import {PokemonCard} from './PokemonCard'
import {useSelector } from 'react-redux'
import { NavbarAuth } from '../NavbarAuth'
import { AddPokemon } from './AddPokemon'

export const UserIndex = () => {


    const { card } = useSelector(state => state.card)

    return (
        <div className="App">
          <NavbarAuth />
            <div className="container ">
                <div className="row mt-4">
                    <div className="col-md-4 text-center py-3">
                        <img src="https://img.wattpad.com/2073d0b2b48cc9acaeb4ba4cf02db57e7f8556c5/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f7162694945557535637a6f7634513d3d2d3837333930353033372e313633333037383438363633303966663730303131363730343439312e676966" className="App-logo " alt="logo" />
                        
                        <AddPokemon />
                    </div>

                    <div className="col-md-8">
                        <div className="row">
                            <main>
                                {
                                    <PokemonCard card={card} />
                                
                                }
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
