export const getSortedData = (prodArr, sortBy) => {
    switch (sortBy) {
      case "PRICE_LOW_TO_HIGH":
        return prodArr.sort((a, b) => a.price - b.price);
  
      case "PRICE_HIGH_TO_LOW":
        return prodArr.sort((a, b) => b.price - a.price);
  
      case "RATING_HIGH_TO_LOW":
        return prodArr.sort((a, b) => b.rating - a.rating);
  
      case "none":
        return prodArr;
  
      default:
        console.log("something is wrong with getSortedData...");
        return prodArr;
    }
  };
  