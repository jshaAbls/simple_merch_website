

//product library
import products from "./products";

// react libraries
import { Children, useRef, useState } from "react";
import { useEffect } from "react";

// gallery per item libraries
import Lightbox, { CloseIcon, PLUGIN_INLINE } from "yet-another-react-lightbox"
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails"
import Zoom from "yet-another-react-lightbox/plugins/zoom"
import Slideshow from "yet-another-react-lightbox/plugins/slideshow"
import Inline from "yet-another-react-lightbox/plugins/inline";




// css designs
import "./Merchandise.css"
import "yet-another-react-lightbox/styles.css"
import "yet-another-react-lightbox/plugins/thumbnails.css"


//icons
import { AiOutlineClose } from "react-icons/ai";



function Merchandise(){




    const [openIndex, setOpenIndex] = useState(null); 
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedSize, setSelectedSize] = useState("All");
    const suggestions = products.filter((product) => product.title.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())).slice(0,5);



    //! dont forget to study this for a bit
useEffect(() => {
  if (openIndex !== null) {
    // 1️⃣ Disable scrolling
    document.body.style.overflow = "hidden";

    // 2️⃣ Listen for Escape key
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpenIndex(null);
      }
    };
    document.addEventListener("keydown", handleKeyDown);

    // 🔹 Cleanup when closing overlay
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleKeyDown);
    };
  }
}, [openIndex]);

// 🔍 Filter logic
const filteredProducts = products.filter((product) => {
  const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase());

  const matchesCategory =
    selectedCategory === "All" || (Array.isArray(product.category)
      ? product.category.includes(selectedCategory)
      : product.category === selectedCategory);

  const matchesSize = selectedSize === "All" || product.size === selectedSize;

  return matchesSearch && matchesCategory && matchesSize;
});

// 🔹 Automatically extract unique categories and sizes
const uniqueCategories = Array.from(
  new Set(
    products.flatMap((p) =>
      Array.isArray(p.category) ? p.category : [p.category]
    )
  )
);

const uniqueSizes = Array.from(new Set(products.map((p) => p.size)));


    return(
        <>

        <div className="top-row">
          <h1>Currently Available Items</h1>
  


    <div className="filter-bar">

      {/* type to search section */}

      <div className="search-input-container">

        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
          />
          {searchTerm && (
  <ul className="suggestions-list">
    {suggestions.map((product, index) => (
      <li
        key={index}
        onClick={() => setSearchTerm(product.title)}
        className="suggestion-item"
      >
        {product.title}
      </li>
    ))}
  </ul>
)}



    </div>

{/* options dropdown */}
<select
  value={selectedCategory}
  onChange={(e) => setSelectedCategory(e.target.value)}
>
  <option value="All">All Categories</option>
  {uniqueCategories.map((cat) => (
    <option key={cat} value={cat}>
      {cat}
    </option>
  ))}
</select>

<select
  value={selectedSize}
  onChange={(e) => setSelectedSize(e.target.value)}
>
  <option value="All">All Sizes</option>
  {uniqueSizes.map((size) => (
    <option key={size} value={size}>
      {size}
    </option>
  ))}
</select>

  </div>
</div>

    {/* The Container */}
    <div className="out-container">

    <div className="card-container">


    {filteredProducts.map((product, index) => (
    <div key={index} className="card" onClick={() => setOpenIndex(index)}>
            <img className="card-image" src={product.src} alt={product.title} />
            <h2 className="card-title"> {product.title}</h2>
            <hr></hr>
            <p className="card-text">{product.description}</p>
        </div>
))}

</div>

</div>


{openIndex !== null && (
  <div className="lightbox-details-wrapper">

    
    
    {/* 🔹 Inline Lightbox */}
    <div className="lightbox-box">
      <Lightbox
        plugins={[Inline, Zoom, Thumbnails, Slideshow]}

        slides={products[openIndex].slides || []}
        
        // carousel={{imageFit: "contain" }}

        slideshow={{ autoplay: false, delay: 1500 }}

        thumbnails={{  showToggle: true, hidden: true
        }}

        inline={{
          style: {width: "auto", aspectRatio: "2 / 2" },
        }}

        zoom={{
          maxZoomPixelRatio: 5,    // how much you can zoom in
          zoomInMultiplier: 2,     // zoom-in step for wheel/double-tap
          doubleTapDelay: 300,
          doubleClickDelay: 300,
          doubleClickMaxStops: 3,  // max zoom-in steps
      }}
      />
    </div>

    {/* 🔹 Product Details */}
    <div className="details-box">
      <h2>{products[openIndex].title}</h2>
      <p>{products[openIndex].description}</p>
      <p>Price: </p>
      <button className="buy-now">Buy This Product</button>
    </div>
      <button className="exit-btn" onClick={() => setOpenIndex(null)}> <AiOutlineClose className="icon" />  </button>
  </div>
)}


    
        </>

        
    );
}

export default Merchandise
// *^^ this then will be used on your App.jsx



// ? I plan on making a merchandise showcase/sell react app
