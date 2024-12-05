import React from "react";
import Card from "./card";
import entree1 from "./images/entrees/entree1.png";
import entree2 from "./images/entrees/entree2.png";
import entree3 from "./images/entrees/entree3.png";
import entree4 from "./images/entrees/entree4.png";
import entree5 from "./images/entrees/entree5.png";
import entree6 from "./images/entrees/entree6.png";
import entree7 from "./images/entrees/entree7.png";
import entree8 from "./images/entrees/entree8.png";
import entree9 from "./images/entrees/entree9.png";

const Entrees = function(){
    return(
        <div className="page">
            <h2>Entrées</h2>
            <p className="intropara">Welcome to the heart of Mom's Spaghetti, where each dish is a symphony of fresh ingredients and homemade sauces. Our innovative creations that define our culinary ethos pay tribute to the timeless classics. Dive into creamy perfection with our <em>Spaghetti Alfredo</em> with tender chicken, or embrace the vibrant flavors and green hues of our <em>Spaghetti al Pesto</em> — a truly herbal triumph. For those craving a little more excitement, don't miss out on our innovative <em>Spa-sagna</em> — a playful fusion of spaghetti and lasagna that's sure to delight both pasta purists and adventurous palates alike. Here at Mom's, love is poured into every plate so grab your fork and join us as we redefine pasta perfection. Remember, <em>there's no place like Mom's!</em></p>
            <section className="container">
                {/* entree 1 */}
                <Card
                    image = {entree1}
                    title = "Spaghetti Pomodoro"
                    description = "Spaghetti, garlic, and peeled San Marzano tomatoes topped with fresh basil in Mom's Pomodoro Sauce"
                />
                {/* entree 2 */}
                <Card
                    image = {entree2}
                    title = "Spaghetti Bolognese"
                    description = "Spaghetti, ground pork, fromage blanc, garlic, shallots, carrots, and fresh radish in Mom's Bolognese Sauce"
                />
                {/* entree 3 */}
                <Card
                    image = {entree3}
                    title = "Spaghetti Alfredo"
                    description = "Spaghetti, fresh italian seasoning, garlic, and grilled chicken topped with fresh parsley in Mom's Alfredo Sauce"
                />
            </section>
            <section className="container">
                {/* entree 4 */}
                <Card
                    image = {entree4}
                    title = "Spaghetti Al Pesto"
                    description = "Spaghetti, fresh lemon juice, and garlic topped with fresh basil in Mom's Pesto Sauce "
                />
                {/* entree 5 */}
                <Card
                    image = {entree5}
                    title = "Spaghetti Alla Vodka🌶️"
                    description = "Spaghetti, bacon crumble, Panko breadcrumbs, garlic, shallots, lemon zest, chili flakes, grated parmesan, rosemary, and fresh basil in Mom's Vodka Sauce"
                />
                {/* entree 6 */}
                <Card
                    image = {entree6}
                    title = "Spaghetti Alla Carbonara"
                    description = "Spaghetti, grated pecorino romano, grated parmesan, whisked egg, guanciale, pancetta, and fresh black pepper"
                />
            </section>
            <section className="container">
                {/* entree 7 */}
                <Card
                    image = {entree7}
                    title = "Spaghetti Alle Vongole🌶️"
                    description = "Spaghetti, garlic, red pepper flakes, Manila clams, and fresh flat-leaf parsley in Mom's White Wine Sauce"
                />
                {/* entree 8 */}
                <Card
                    image = {entree8}
                    title = "Spa-sagna"
                    description = "Spaghetti, ground beef, Mom's Bolognese Sauce, Mom's Alfredo Sauce, fresh italian herbs, and shredded mozzarella baked in the style of lasagna"
                />
                {/* entree 9 */}
                <Card
                    image = {entree9}
                    title = "Spushi"
                    description = "Marinara sauce, ricotta cheese, grated parmesan, and Mom's Mini Meatballs wrapped in spaghetti — sushi style — and topped with fresh basil"
                />
            </section>
        </div>
    )
}

export default Entrees;