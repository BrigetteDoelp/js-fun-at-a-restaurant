function takeOrder(orderNumber, orderList) {

  if (orderList.length >= 3) {
    return;
  } else {
    orderList.push(orderNumber);
  }
}

function refundOrder(orderNumber, orderList) {
  orderList.shift()
}

function listItems(itemToList) {

  return `${itemToList[0].item}, ${itemToList[1].item}, ${itemToList[2].item}`
}

function searchOrder(deliveryOrderArr, orderType) {
  if (deliveryOrderArr[0].item === orderType) {
    return true
  } else{
    return false
  }
}

module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}

//npm test test/order-test.js
