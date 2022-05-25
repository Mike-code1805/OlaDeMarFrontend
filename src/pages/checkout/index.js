
import Checkout from "src/components/checkout";
import withIndexing from "src/components/HOC/withIndexing";

const CheckOut = () => {
  return (
    <div>
        <Checkout/>
    </div>
  )
}

export default withIndexing(CheckOut, 'checkout');