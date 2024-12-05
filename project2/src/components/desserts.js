import React from "react";
import Card from "./card";
import dessert1 from "./images/desserts/dessert1.png";
import dessert2 from "./images/desserts/dessert2.png";
import dessert3 from "./images/desserts/dessert3.png";
import dessert4 from "./images/desserts/dessert4.png";
import dessert5 from "./images/desserts/dessert5.png";
import dessert6 from "./images/desserts/dessert6.png";

const Desserts = function(){
    return(
        <div className="page">
            <h2>Desserts</h2>
            <p className="intropara">Embark on a journey through the bold and whimsical world of Mom's Spaghetti desserts, where every bite is a delightful spaghetti surprise. Our dessert menu is a playful reinvention of spaghetti in the most scrumptious of ways. Indulge your sweet tooth with our signature <em>Spaghetti Sundae</em> or if you're craving something more savory, try our <em>Cannoli di Spaghetti</em> — a fried spaghetti cannoli filled with robiola cream and pine nuts. Or, if you're feeling all sweaty spaghetti, cool off with our innovative <em>Spaghetti Momsicle</em>. Here at Mom's, dessert is not just the end of a meal — it's a celebration! So prepare your taste buds for an experience like no other as you'll soon realize why everyone's saying, <em>there's no place like Mom's!</em></p>
            <section className="container">
                {/* dessert 1 */}
                <Card
                    image = {dessert1}
                    title = "Spaghetti Sundae"
                    description = 'Vanilla "spaghetti", fresh strawberry jam "pomodoro", coconut "parmesan"'
                />
                {/* dessert 2 */}
                <Card
                    image = {dessert2}
                    title = "Spaghetti Meatball Cake"
                    description = 'A carved bowl sponge cake with fondant "spaghetti", raspberry jam "bolognese", white chocolate "parmesan", and rice krispie treat "meatballs"'
                />
                {/* dessert 3 */}
                <Card
                    image = {dessert3}
                    title = "Spaghetti Pie"
                    description = "Ricotta, baked spaghetti, lemon & orange zest"
                />
            </section>
            <section className="container">
                {/* dessert 4 */}
                <Card
                    image = {dessert4}
                    title = "Cannoli di Spaghetti"
                    description = "Fried spaghetti cannoli with robiola cream, pine nuts, spring onion, and asparagus"
                />
                {/* dessert 5 */}
                <Card
                    image = {dessert5}
                    title = "Spaghetti Meatball Cookie"
                    description = 'Vanilla royal icing, ivory icing "spaghetti", red icing, ferrerro rocher "meatball"'
                />
                {/* dessert 6 */}
                <Card
                    image = {dessert6}
                    title = "Spaghetti Momsicle"
                    description = "Frozen spaghetti pomodoro popsicle with chilled marinara dipping sauce on the side"
                />
            </section>
        </div>
    )
}

export default Desserts;