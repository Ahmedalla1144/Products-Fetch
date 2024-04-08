const get_img = function (img_url) {
  return `<img src='${img_url}'/>`;
};
const get_product = async function () {
  const { search, host, hostname, href } = location;

  const id = search.split("?")[1];

  const api = "https://dummyjson.com/products/" + id;

  const res = await fetch(api);

  const {
    title,
    description,
    discountPercentage,
    price,
    rating,
    brand,
    category,
    stock,
    thumbnail,
    images,
  } = await res.json();

  const imgs = images.map(get_img);

  console.log(imgs);

  product.innerHTML = `
        
        <div class="details">
            <div class="fotoram">
                ${imgs}
            </div>
        
    
            <div class="detail">
                <h4>Title: <span>${title}</span></h4>

                <p>Brand: <span>${brand}</span></p>

                <p>Category: <span>${category}</span></p>

                <p>Description:<span>${description}</span></p>

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

get_product();
