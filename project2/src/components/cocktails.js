import React from "react";
import Card from "./card";
import cocktail1 from "./images/cocktails/cocktail1.png";
import cocktail2 from "./images/cocktails/cocktail2.png";
import cocktail3 from "./images/cocktails/cocktail3.png";
import cocktail4 from "./images/cocktails/cocktail4.png";
import cocktail5 from "./images/cocktails/cocktail5.png";
import cocktail6 from "./images/cocktails/cocktail6.png";

const Cocktails = function(){
    return(
        <div className="page">
            <h2>Cocktails</h2>
            <p className="intropara">Come join us at Mom's Spaghetti bar, where the pasta passion extends beyond the plate and into your glass. Venture into uncharted (but tasty!) territory with <em>The Tomate-Old Fashioned</em>, a classic cocktail with a tomato twist — literally! Dive into the savory depths of <em>Mom's Bloody Mary</em>, where Mom's signature pomodoro sauce and tomato-infused vodka come together, garnished with Mom's iconic meatball. For a truly unique experience, sip on our <em>San Marzano-gria</em> — a vibrant blend of the richest tomato varieties swimming in tomato wine punch, a refreshing homage to the flavors of summer. Ask your bartender how to join our <strong><em>Mom's Favorite</em></strong> membership for some sweet spaghetti savings. As ever, <em>there's no place like Mom's!</em></p>
            <section className="container">
                {/* cocktail 1 */}
                <Card
                    image = {cocktail1}
                    title = "Mom's Bloody Mary"
                    description = "Mom's pomodoro sauce and tomato-infused vodka garnished with Mom's Meatballs and cherry tomatoes on a spaghetti skewer"
                />
                {/* cocktail 2 */}
                <Card
                    image = {cocktail2}
                    title = "The Margherita"
                    description = "Pasta water, La Tomato (tomato liqueur), and tequila garnished with burratta, lime wedges, and a parmesan rim"
                />
                {/* cocktail 3 */}
                <Card
                    image = {cocktail3}
                    title = "The Spaghettini"
                    description = "Black Tomato Gin and pasta water garnished with Mom's Mini Meatballs on a spaghetti skewer"
                />
            </section>
            <section className="container">
                {/* cocktail 4 */}
                <Card
                    image = {cocktail4}
                    title = "The Red Russian"
                    description = "Tomato-infused vodka, La Tomato (tomato liqueur), and cream served over ice"
                />
                {/* cocktail 5 */}
                <Card
                    image = {cocktail5}
                    title = "The Tomate-old Fashioned"
                    description = "Tomatin (tomato whiskey), pasta water, sugar cube, and celery & sundried tomato bitters garnished with a tomato twist"
                />
                {/* cocktail 6 */}
                <Card
                    image = {cocktail6}
                    title = "San Marzano-gria"
                    description = "Tomato wine punch with cherry tomatoes, campari tomatoes, green tomatoes, and black tomatoes served over ice"
                />
            </section>
        </div>
    )
}

export default Cocktails;