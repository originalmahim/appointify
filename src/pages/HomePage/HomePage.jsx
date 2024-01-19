import NewsLetter from "../../components/contacts/NewsLetter";
import UserReviews from "../../components/customerReview/UserReviews";

const HomePage = () => {
    return (
        <section>
            {/* add home components */}
            <UserReviews></UserReviews>
            <NewsLetter></NewsLetter>
        </section>
    );
};

export default HomePage;