const getDeliveryFilteredData = (prodArr, showFastDelivery) => {
    switch (showFastDelivery) {
      case true:
        const bufferArr = [...prodArr];
        return bufferArr.filter((item) => item.delivery === "fast");
      case false:
        return prodArr;
      default:
        console.log("delivery filter is broken...");
        break;
    }
  };
  export const getFilteredData = (
    prodArr,
    showEntireInventory,
    showFastDelivery
  ) => {
    const bufferArr = getDeliveryFilteredData(prodArr, showFastDelivery);
    switch (showEntireInventory) {
      case true:
        return bufferArr;
      case false:
        return bufferArr.filter((item) => item.inStock);
      default:
        break;
    }
  };
  