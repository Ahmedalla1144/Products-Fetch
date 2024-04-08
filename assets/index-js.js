const getRndInteger = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

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
  const rand_num = getRndInteger(0, images.length);
  const rand_img = images[rand_num];


  container.innerHTML += `
      <div class="details">
          <div class="fotora">
              <img src= ${rand_img} alt="${id}" />
          </div>
    
          <div class="detail">
              <h4>Title: <span>${title}</span></h4>
          
              <p>Brand: <span>${brand}</span></p>
          
              <p>Category: <span>${category}</span></p>
          
              <p>Description:<span>${description.substring(
                0,
                30
              )}</span><a href="product.html?${id}">...</a></p>
          
              <p>DiscountPercentage: <span>${discountPercentage}</span></p>
          
              <p>
                  Price:<span> ${price}</span> Rating:<span> ${rating} </span>Stock:<span>
                  ${stock}</span> Id:<span> ${id}</span>
              </p>
  
          </div>    
          <div class="button">
              <a href="product.html?${id}"><button>Buy now</button></a>
          </div>
      </div>
      
        `;
};

const add_rand_product = function ({ thumbnail, title, description }) {
  rand_product.innerHTML = `
        <img src="${thumbnail}" alt="" />
        <div>
          <h3>$${title}</h3>
          <p>${description}</p>
          <button>Shop Now</button>
        </div>
  `;
};

const get_products = async function () {
  const res = await fetch("https://dummyjson.com/products");

  console.log(res);

  const {products} = await res.json();

  console.log(products);

  const rand_num = getRndInteger(0, products.length);

  add_rand_product(products[rand_num]);

  products.forEach(show_products);
};

get_products();

const get_clock = function () {
  const now = new Date();
  const scnds = now.getSeconds();
  const mins = now.getMinutes();
  const hours = now.getHours();

  scnd.innerHTML = scnds;
  min.innerHTML = mins;
  hour.innerHTML = hours;
};
get_clock();
setInterval(get_clock, 1000);
