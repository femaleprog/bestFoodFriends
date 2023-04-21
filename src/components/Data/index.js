const products = [
  {
    id: 1,
    name: "Brown Shirt",
    description: "Brown T-Shirt for Women",
    price: 16.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/13/23/e1/1323e1a9b48110a20173ae04c5f7ede8.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 2,
    name: "Light Brown Shirt",
    description: "Light Brown Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/ca/a2/d7/caa2d71338c7de0f8a1a4466a33f2e8a.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 3,
    name: "Women Grey Shirt",
    description: "Grey Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/8a/a8/4d/8aa84d3a15a7303ffd16fc2c672d33cf.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 4,
    name: "Warm Shirt Women",
    description: "Woolen Hoodie Women",
    price: 20.00,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/0d/4b/43/0d4b43ed953a9a59c334aa760802f1b8.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 5,
    name: "Women Grey Shirt",
    description: "Light Grey Shirt for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/2e/b9/4b/2eb94b0cd7386bffd4f23c10db0a7cb5.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 6,
    name: "Women Red/Brown Shirt",
    description: "Red/Brown Blouse for Women",
    price: 19.99,
    gender: "women",
    type: "blouse",
    img: "https://i.pinimg.com/474x/ed/0a/d7/ed0ad7f82dbf9991d613de48f15aa21b.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 7,
    name: "Dark Grey Shirt Women",
    description: "Dark Grey Shirt for Women",
    price: 6.00,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/62/23/e4/6223e43cef3783a6ff68834561454b99.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 8,
    name: "White Shirt Women",
    description: "White Shirt for Women",
    price: 14.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/c8/37/c1/c837c198538396f54cfaaeac0388b37b.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 9,
    name: "Black Shirt Women",
    description: "Black Shirt for Women",
    price: 20.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/64/ec/1d/64ec1d2de77d59d76106c776500f3b16.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 10,
    name: "No Shoulder Hoodie",
    description: "Hoodie for Women",
    price: 4.99,
    gender: "women",
    type: "shirt",
    img: "https://i.pinimg.com/474x/62/23/e4/6223e43cef3783a6ff68834561454b99.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 11,
    name: "Women Watch Gold",
    description: "Golden Watch for Women",
    price: 45.99,
    gender: "women",
    type: "watch",
    img: "https://i.pinimg.com/474x/e4/29/cc/e429cc415c2bd606f8fd22e7a15fcd72.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 12,
    name: "Black Pearl Necklace",
    description: "Black Pearl Necklace for Women",
    price: 14.99,
    gender: "women",
    type: "necklace",
    img: "https://i.pinimg.com/474x/7d/71/44/7d7144c9dc8dffac22305388169b650e.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 13,
    name: "Man Black Shirt",
    description: "Black T-Shirt for Men",
    price: 10.99,
    gender: "men",
    type: "shirt",
    img: "https://i.pinimg.com/474x/7e/cd/d9/7ecdd9dce8d7c02d93a30a8739f10207.jpg",
    inCart: false,
    category: "clothes"
  },
  {
    id: 14,
    name: "Man Grey Tanktop",
    description: "Grey Tanktop for Men",
    price: 14.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/portrait-of-young-man-wearing-tshirt-picture-id465207699?k=6&m=465207699&s=612x612&w=0&h=wSacC0bmcrekig1DW8lOwH7y3X0e4R9266-TuivVQJA=",
    inCart: false,
    category: "clothes"
  },
  {
    id: 15,
    name: "Man White Shirt",
    description: "White Shirt for Men",
    price: 20.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-wearing-a-white-shirt-picture-id465331977?k=6&m=465331977&s=612x612&w=0&h=-K3c5eE2dZGmg6d5BrBfxOvcHRP7PwHrylyjuEVjbZo=",
    inCart: false,
    category: "clothes"
  },
  {
    id: 16,
    name: "Man Brown Shirt",
    description: "Brown Shirt for Men",
    price: 13.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/young-man-looks-to-the-side-picture-id184616842?k=6&m=184616842&s=612x612&w=0&h=SmtsffRByKDH4_HtzGY8bWvHgH8o_4epWVPogvfJXnk=",
    inCart: false,
    category: "clothes"
  },
  {
    id: 17,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 13.99,
    gender: "men",
    type: "tie",
    img: "http://image.11st.my/g3/2/7/4/6/7/1/1274671_B_V5.jpg",
    inCart: false,
    category: "accessories"
  },
  {
    id: 18,
    name: "Black Shirt Men",
    description: "Black Shirt for Men",
    price: 9.99,
    gender: "men",
    type: "shirt",
    img: "http://media.istockphoto.com/photos/smiling-man-in-a-black-t-shirt-picture-id520883622?k=6&m=520883622&s=612x612&w=0&h=XuxfQE0EOo_uWqA8SzNJvZ9Vn-sKR_cT4J9GRIudE4U=",
    inCart: false,
    category: "clothes"
  },
  {
    id: 19,
    name: "4-Pack Man Ties",
    description: "Ties for Men",
    price: 35.99,
    gender: "men",
    type: "tie",
    img: "http://www.theethicalman.com/uploads/4/8/0/0/4800645/3035404_orig.png",
    inCart: false,
    category: "accessories"
  },
  {
    id: 20,
    name: "Man Black Tie",
    description: "Black Tie for Men",
    price: 15.99,
    gender: "men",
    type: "tie",
    img: "http://static.becomegorgeous.com/img/articles/what_does_your_mans_tie_tell_about_his_personality_.jpg",
    inCart: false,
    category: "accessories"
  },
];

export default products;
