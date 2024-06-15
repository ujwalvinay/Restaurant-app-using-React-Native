// data.ts
export interface FoodItem {
    name: string;
    image: string;
    price: string;
  }
  
  const foodData: FoodItem[] = [
    {
      name: "Delicious Cake",
      image: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/rainbow_cake_20402_16x9.jpg",
      price: "20.00",
    },
    {
      name: "Croissant",
      image: "https://www.shutterstock.com/image-photo/single-plain-croissant-on-white-260nw-2318302719.jpg",
      price: "5.00",
    },
    {
      name: "Donut",
      image: "https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2022/02/colorful-glazed-donuts.jpg",
      price: "5.00",
    },
    {
      name: "Macarons",
      image: "https://blog.ciachef.edu/wp-content/uploads/2016/11/Macarons.jpg",
      price: "5.00",
    },
    // Add more items as needed
  ];
  
  export default foodData;
  