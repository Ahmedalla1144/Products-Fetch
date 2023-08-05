const show_products = function ({
  brand,
  category,
  description,
  discountPercentage,
  id,
  images,
  price,
  rating,
  stock,
  thumbnail,
  title,
}) {
  container.innerHTML += `
      <div class="details">
        
        <img src="${thumbnail}" alt="${id}" />
        
        <h4>Title: <span>${title}</span></h4>
        
        <p>Brand: <span>${brand}</span></p>
        
        <p>Category: <span>${category}</span></p>
        
        <p>Description:<span>${description}</span></p>
        
        <p>DiscountPercentage: <span>${discountPercentage}</span></p>
        
        <p>
          Price:<span> ${price}</span> Rating:<span> ${rating} </span>Stock:<span>
            ${stock}</span>
        </p>

        <div class="button">
          <button>Buy now</button>
        </div>
      </div>
      `;
};

const get_products = async function () {
  const res = await fetch("assets/json/products.json");

  console.log(res);

  const products = await res.json();

  console.log(products);

  products.forEach(show_products);
};

get_products();
