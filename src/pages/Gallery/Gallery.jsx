import book1 from "../../assets/book1.png";
import book2 from "../../assets/book2.png";
import book3 from "../../assets/book3.png";
import book4 from "../../assets/book4.png";
import book5 from "../../assets/book5.png";
import { Book } from "../../components/Book/Book";
import "./Gallery.css";

const Gallery = () => {
  return (
    <>
      <div className="grid-container">
        <Book logo={book1} title="Great travel at desert" author="Howdy" />
        <Book logo={book2} title="Great travel at desert" author="Howdy" />
        <Book logo={book3} title="Great travel at desert" author="Howdy" />
        <Book logo={book4} title="Great travel at desert" author="Howdy" />
        <Book logo={book5} title="Great travel at desert" author="Howdy" />
      </div>
    </>
  );
};

export default Gallery;
