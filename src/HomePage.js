import Chicago from "./Chicago";
import Hero from "./Hero";
import Specials from "./Specials";
import UserReviews from "./UserReviews";

function HomePage() {
    return (
        <main>
            <Hero />
            <Specials />
            <UserReviews />
            <Chicago />
        </main>
    );
}

export default HomePage;