// Get product ID from URL
const params = new URLSearchParams(window.location.search);
const productId = params.get("id"); // Removed parseInt because IDs are strings like "RC101"

// Updated Products Array
const products = [
{
    id: "RC101",
    name: "Nose Pin",
    price: "5,800 PKR",
    weight: "0.250 mg",
    goldKarat: "12K Gold",
    stone: "No Stone",
    stock: "instock",
    design: "Traditional Stud",
    image1: "images/product1a.png",
    image2: "images/product1b.jpg",
    description: "Elegant and minimalistic traditional gold nose pin, perfect for everyday wear."
  },
  {
    id: "RC102",
    name: "Nose Pin",
    price: "5,000 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Diamond",
    design: "Floral",
    stock: "instock",
    image1: "images/product2a.png",
    image2: "images/product2b.jpg",
    description: "Beautiful floral design nose pin studded with a sparkling diamond for a premium look."
  },
  {
    id: "RC103",
    name: " Nose Pin",
    price: "10,800 PKR",
    weight: "0.465 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product3a.png",
    image2: "images/product3b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
  {
    id: "RC104",
    name: "Nose Pin",
    price: "5,800 PKR",
    weight: "0.250 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product4a.png",
    image2: "images/product4b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
    {
    id: "RC105",
    name: "Nose Pin",
    price: "8.000 PKR",
    weight: "0.345 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product5a.png",
    image2: "images/product5b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
    {
    id: "RC106",
    name: "Nose Pin",
    price: "3,000 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product6a.png",
    image2: "images/product6b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC107",
    name: "Nose Pin",
    price: "3,830 PKR",
    weight: "0.165 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product7a.png",
    image2: "images/product7b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC108",
    name: "Nose Pin",
    price: "3250 PKR",
    weight: "0.140 mg",
    avainlableInSizes:"0.215mg , 0.165mg , 0.140mg , 0.105mg , 0.100mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product8a.png",
    image2: "images/product8b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC109",
    name: "Nose Pin",
    price: "7,500 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product9a.png",
    image2: "images/product9b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC110",
    name: "Nose Pin",
    price: "6,380 PKR",
    weight: "0.275 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product10a.png",
    image2: "images/product10b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC111",
    name: "Nose Pin",
    price: "7,500 PKR",
    weight: "0.7 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product11a.png",
    image2: "images/product11b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC112",
    name: "Nose Pin",
    price: "5,800 PKR",
    weight: "0.250 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product12a.png",
    image2: "images/product12b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC113",
    name: "Nose Pin",
    price: "5,000 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product13a.png",
    image2: "images/product13b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC114",
    name: "Nose Pin",
    price: "4,520 PKR",
    weight: "0.195 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product14a.png",
    image2: "images/product14b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC115",
    name: "Nose Pin",
    price: "6,620 PKR",
    weight: "0.285 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product15a.png",
    image2: "images/product15b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC116",
    name: "Nose Pin",
    price: "9,500 PKR",
    weight: "0.8 mg",
    avainlableInSizes:"0.230mg , 0.175mg ",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product16a.png",
    image2: "images/product16b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC117",
    name: "Nose Pin",
    price: "7,500 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product17a.png",
    image2: "images/product17b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC118",
    name: "Nose Pin",
    price: "8,500 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product18a.png",
    image2: "images/product18b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC119",
    name: "Nose Pin",
    price: "8,500 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product19a.png",
    image2: "images/product19b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  },
   {
    id: "RC120",
    name: "Nose Pin",
    price: "4,500 PKR",
    weight: "0.8 mg",
    goldKarat: "12K Gold",
    stone: "Cubic Zirconia",
    design: "Modern",
    stock: "instock",
    image1: "images/product20a.png",
    image2: "images/product20b.jpg",
    description: "Trendy modern design with a stylish twist, studded with high-quality zircon stones."
  }];

// Find product by ID
const product = products.find(p => p.id === productId);

// Container to show product details
const container = document.getElementById("product-detail");

if (product) {
  container.innerHTML = `
  <div class="detail-wrapper">
    <img src="${product.image1}" alt="${product.name}" />
    <div>
      <h1>${product.name} - ${product.id}</h1>
      <h6>Brand : RAYYAN COLLECTION</h6>
      <h2>Rs ${product.price}</h2>
      <p><strong>Weight:</strong> ${product.weight}</p>
      <p><strong>available in sizes : </strong> ${product.avainlableInSizes}</p>
        <p><strong>All sizes have different prices</strong></p>
      <p><strong>Gold Karat:</strong> ${product.goldKarat}</p>
      
      
      <button onclick="goBack()">Back to Products</button>
      
      <button onclick="buyNow('${product.name}','${product.image1}','${product.id}')">Buy Now</button>

    </div>
  </div>
`;
} else {
  container.innerHTML = `<h2>Product not found!</h2>`;
}

// Back function
function goBack() {
  window.history.back();
}
// buynow
function buyNow(productName, productImage, productId) {
  window.location.href = `contact.html?product=${encodeURIComponent(productName)}&id=${encodeURIComponent(productId)}&image=${encodeURIComponent(productImage)}`;
}
