
import React, {useMemo, useEffect, useState } from "react";
import styled from 'styled-components';

export const Stats = (props) => {

    const ContainerStats = styled.div`
            display: flex;
            flex-flow: row;
            width: 230px;
            margin:0px auto;
            .statsOne{
                width: 100px;
                margin-right: 20px;
            
            }

            .list{
                margin-bottom: -15px;
            }

            .progress-bar {
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                color: #fff;
                text-align: center;
                white-space: nowrap;
                background-color: #23c95a;
                transition: width .6s ease;
            }

    `;


    return (
        <ContainerStats>
                
            <div className="statsOne">
                <div className="list">
                    <p>{props?.prop?.stats?.[0].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[0].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[0].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[0].base_stat}
                            </div>
                        </div>
                </div>
                <br/>

                <div className="list">
                    <p>{props?.prop?.stats?.[1].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[1].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[1].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[1].base_stat}
                            </div>
                        </div>
                </div>
                <br/>

                <div className="list">
                    <p>{props?.prop?.stats?.[2].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[2].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[2].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[2].base_stat}
                            </div>
                        </div>
                </div>
            </div>
                <br/>
            <div className="statsTwo">
                <div className="list">
                    <p>{props?.prop?.stats?.[3].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[3].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[3].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[3].base_stat}
                            </div>
                        </div>
                </div>
        
                <br/>
            
                <div className="list">
                    <p>{props?.prop?.stats?.[4].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[4].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[4].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[4].base_stat}
                            </div>
                        </div>
                </div>
                <br/>
                <div className="list">
                    <p>{props?.prop?.stats?.[5].stat.name}</p>
                        <div className="progress" >
                            <div
                                className="progress-bar"
                                role="progressbar"
                                style={{ width: props?.prop?.stats?.[5].base_stat }}
                                aria-valuenow={props?.prop?.stats?.[5].base_stat} 
                                aria-valuemin="0"
                                aria-valuemax="100"
                            >
                                {props?.prop?.stats?.[5].base_stat}
                            </div>
                        </div>
                </div>
                <br/>
            </div>

   


        </ContainerStats>
    )
}
