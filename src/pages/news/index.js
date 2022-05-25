
import withIndexing from "src/components/HOC/withIndexing";
import Newsletter from "src/components/newsEmail";

const News = () => {
  return (
    <div>
        <Newsletter/>
    </div>
  )
}

export default withIndexing(News, 'news');