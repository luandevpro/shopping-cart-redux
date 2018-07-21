
var initialState = [
   {
      id: 1,
      name: "Iphone 7",
      image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      description: "San pham Iphone 7 voi thiet ke tinh te va hien dai ...",
      price: 400,
      rating: 4,
      inventory: 15
   },
   {
      id: 2,
      name: "Iphone 10",
      image: "https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/H/H0/HH0H2/HH0H2?wid=445&hei=445&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=K7ik72",
      description: "San pham Iphone 10 voi thiet ke tinh te va hien dai ...",
      price: 1000,
      rating: 5,
      inventory: 1005
   }
]

var appReducers = (state = initialState , action) => {
   switch(action.type){
      case "LIST_PRODUCTS":
         return [...state]
      default:
         return [...state]   
   }
}

export default appReducers