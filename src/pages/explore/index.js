import FeaturedOrders from "src/components/featuredOrders";
import withIndexing from "src/components/HOC/withIndexing";

const Explore = () => {
  return (
    <div>
      <FeaturedOrders/>
    </div>
  )
}

export default withIndexing(Explore, 'explore');