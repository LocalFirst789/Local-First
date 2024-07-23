document.addEventListener('DOMContentLoaded', function() {
    const colorSelect = document.getElementById('color');
    const sizeSelect = document.getElementById('size');
    const materialDisplay = document.getElementById('material');
    const priceDisplay = document.getElementById('price');
    const addToCartButton = document.getElementById('add-to-cart');
    const productImage = document.getElementById('product-image');

    // Product data
    const products = {
        green: {
            material: 'Nike Apex Bucket Hat ,Polyester',
            price: 850,
            image: 'product4.png'
        },
        black: {
            material: 'Nike Apex Bucket Hat ,Polyester',
            price: 850,
            image: 'product6.jpeg'
        },
        coco: {
            material: 'Nike Apex Bucket Hat ,Polyester',
            price: 850,
            image: 'coco.png'
            },
        white: {
            material: 'Nike Apex Bucket Hat ,Polyester',
            price: 850,
            image: 'white apex.jpg'
        }
        
        // Add more colors as needed
    };

    // Initial setup
    updateProductDetails();

    // Event listeners
    colorSelect.addEventListener('change', updateProductDetails);
    sizeSelect.addEventListener('change', updateProductDetails);
    addToCartButton.addEventListener('click', addToCart);

    // Function to update product details based on selection
    function updateProductDetails() {
        const selectedColor = colorSelect.value;
        const selectedSize = sizeSelect.value;

        // Update material and price display
        materialDisplay.textContent = products[selectedColor].material;
        priceDisplay.textContent = `R${products[selectedColor].price.toFixed(2)}`;

        // Update product image
        productImage.src = products[selectedColor].image;
    }

    // Function to add selected product to cart
    function addToCart() {
        const selectedColor = colorSelect.value;
        const selectedSize = sizeSelect.value;
        const selectedProduct = {
            color: selectedColor,
            size: selectedSize,
            material: products[selectedColor].material,
            price: products[selectedColor].price
        };

        // Example: You can implement your cart functionality here
        console.log('Added to cart:', selectedProduct);
        alert(`Added to cart:\nColor: ${selectedProduct.color}\nSize: ${selectedProduct.size}\nMaterial: ${selectedProduct.material}\nPrice: R${selectedProduct.price.toFixed(2)}`);
    }
});
