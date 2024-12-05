import React from "react";

const Card = function(props){
    return(
        <div>
            <div className="card">
                <img src={props.image} alt=""/>
                {props.menu && (
                    <div>
                        <h2><p className="menu">{props.menu}</p></h2>
                    </div>
                )}
                {props.title && (
                    <div>
                        <p className="title">{props.title}</p>
                    </div>
                )}
                {props.description && (
                    <div>
                        <p className="description">{props.description}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Card;