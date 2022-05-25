import Categories from "src/components/categories";
import FeaturedOrders from "src/components/featuredOrders";
import withIndexing from "src/components/HOC/withIndexing";

const Home = () => {
  return (
    <div>
      <Categories/>
      <FeaturedOrders/>
    </div>
  )
}

export default withIndexing(Home, 'home');