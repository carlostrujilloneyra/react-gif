import GifGridItem from "./GifGridItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

const GifGrid = ({category}) => {

  const { data:images, loading } = useFetchGifs(category);
 
  return (
    <>
      <h3 className="card animate__animated animate__backInLeft">{category}</h3>

      { loading && <p className="card animate__animated animate__heartBeat">Loading</p> }

      <div>

        <ol className="card-container">
          {images.map((image) => {
            // const {id, title} = image;
            return <GifGridItem key={image.id} {...image} />;
          })}
        </ol>
        
      </div>
    </>
  );
}

export default GifGrid;