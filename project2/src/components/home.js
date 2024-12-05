import React from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import entrees from "./images/entrees/entree.png";
import desserts from "./images/desserts/dessert.png";
import cocktails from "./images/cocktails/cocktail.png";

const Home = ()=>{
    return(
        <div className="page">
            <h2>Mom's Spaghetti - A Family Restaurant</h2>
            <p className="intropara">Are you ready for the Spaghetti you'll never forgetti? Here at Mom's, innovation meets the twirl of tradition and you'll taste our commitment to culinary creativity in every bite. Indulge, savor, and experience spaghetti like never before. Come join the family and see what's cooking at Mom's. <em>There's no place like Mom's!</em></p>
            <section className="container">
                {/* Link to Entrees */}
                <Link to='/entrees'>
                    <Card
                        image={entrees}
                        menu="Entrées"
                    />
                </Link>
                {/* Link to Desserts */}
                <Link to='/desserts'>
                    <Card
                        image={desserts}
                        menu="Desserts"
                    />
                </Link>
                {/* Link to Cocktails */}
                <Link to='/cocktails'>
                    <Card
                        image={cocktails}
                        menu="Cocktails"
                    />
                </Link>
            </section>
        </div>
    )
}

export default Home;