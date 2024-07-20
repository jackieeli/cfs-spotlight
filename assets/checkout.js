// checkout.js
window.addEventListener("loadCheckoutEventListeners", function () {
  window.Shopify.checkout.addEventListener(
    "shippingmethod",
    function (shippingMethodEvent) {
      // 获取购物车中的产品
      var cartItems = window.Shopify.checkout.getCart().items;

      // 遍历每个购物车产品
      cartItems.forEach(function (item) {
        // 修改产品名称
        item.properties._newTitle = "Custom Product Name";
      });

      // 创建新的购物车属性对象
      var newCartProperties = {
        items: cartItems,
      };

      // 使用修改后的购物车属性更新Checkout
      window.Shopify.checkout.updateCart(newCartProperties);
    }
  );
});
