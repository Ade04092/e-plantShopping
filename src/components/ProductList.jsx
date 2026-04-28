import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../CartSlice";
import "./ProductList.css";

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  const plantsArray = [
    {
      category: "Aromatic Plants",
      plants: [
        { name: "Lavender", image: "https://images.unsplash.com/photo-1468327768560-75b778cbb551", description: "A calming fragrant plant with purple blooms.", cost: "$12" },
        { name: "Mint", image: "https://images.unsplash.com/photo-1628556270448-4d4e4148e1b1", description: "Fresh scented herb used in teas and recipes.", cost: "$8" },
        { name: "Rosemary", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662", description: "Aromatic herb with needle-like leaves.", cost: "$10" },
        { name: "Basil", image: "https://images.unsplash.com/photo-1618375569909-3c8616cf7733", description: "Popular kitchen herb with a sweet aroma.", cost: "$9" },
        { name: "Jasmine", image: "https://images.unsplash.com/photo-1525310072745-f49212b5ac6d", description: "Beautiful plant known for its sweet fragrance.", cost: "$15" },
        { name: "Lemongrass", image: "https://images.unsplash.com/photo-1591857177580-dc82b9ac4e1e", description: "Citrus-scented plant perfect for indoor gardens.", cost: "$11" },
      ],
    },
    {
      category: "Medicinal Plants",
      plants: [
        { name: "Aloe Vera", image: "https://images.unsplash.com/photo-1509423350716-97f9360b4e09", description: "Low-maintenance plant known for soothing gel.", cost: "$14" },
        { name: "Chamomile", image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946", description: "Gentle flowering plant often used for relaxation.", cost: "$10" },
        { name: "Echinacea", image: "https://images.unsplash.com/photo-1560807707-8cc77767d783", description: "Bright flowering plant popular in wellness gardens.", cost: "$13" },
        { name: "Sage", image: "https://images.unsplash.com/photo-1515586000433-45406d8e6662", description: "Hardy herb with soft leaves and earthy scent.", cost: "$9" },
        { name: "Thyme", image: "https://images.unsplash.com/photo-1608032364895-0da67af36cd2", description: "Compact herb used for cooking and home gardens.", cost: "$8" },
        { name: "Calendula", image: "https://images.unsplash.com/photo-1526047932273-341f2a7631f9", description: "Colorful flowering plant for bright indoor spaces.", cost: "$12" },
      ],
    },
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "https://images.unsplash.com/photo-1593691509543-c55fb32d8de5", description: "Strong indoor plant known for air-purifying benefits.", cost: "$18" },
        { name: "Peace Lily", image: "https://images.unsplash.com/photo-1598880940080-ff9a29891b85", description: "Elegant plant with glossy leaves and white flowers.", cost: "$20" },
        { name: "Spider Plant", image: "https://images.unsplash.com/photo-1524598171353-ce84aef4dd30", description: "Easy-care plant with long arching leaves.", cost: "$13" },
        { name: "Boston Fern", image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6", description: "Lush green fern that adds freshness indoors.", cost: "$16" },
        { name: "Rubber Plant", image: "https://images.unsplash.com/photo-1545241047-6083a3684587", description: "Bold leafy plant with shiny dark green foliage.", cost: "$22" },
        { name: "Pothos", image: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b", description: "Trailing plant that grows well in many conditions.", cost: "$12" },
      ],
    },
  ];

  const handleAddToCart = (product) => {
    dispatch(addItem(product));
    setAddedToCart((prevState) => ({
      ...prevState,
      [product.name]: true,
    }));
  };

  return (
    <div className="product-grid">
      {plantsArray.map((category, index) => (
        <div key={index} className="category-section">
          <h1>{category.category}</h1>

          <div className="product-list">
            {category.plants.map((plant, plantIndex) => (
              <div className="product-card" key={plantIndex}>
                <img
                  className="product-image"
                  src={plant.image}
                  alt={plant.name}
                />

                <div className="product-title">{plant.name}</div>
                <div className="product-description">{plant.description}</div>
                <div className="product-cost">{plant.cost}</div>

                <button
                  className={`product-button ${
                    addedToCart[plant.name] ? "disabled" : ""
                  }`}
                  onClick={() => handleAddToCart(plant)}
                  disabled={addedToCart[plant.name]}
                >
                  {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
