

var shoppingCart = (function () {
    var cart = [];

    function Item(name, price, count) {
        this.name = name
        this.price = price
        this.count = count
    }

    function saveCart() {
        localStorage.setItem("shoppingCart", JSON.stringify(cart));
    }

    function loadCart() {
        cart = JSON.parse(localStorage.getItem("shoppingCart"));
        if (cart === null) {
            cart = []
        }
    }

    loadCart();



   
    var obj = {};

    obj.addItemToCart = function (name, price, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count += count;
                saveCart();
                return;
            }
        }

        console.log("addItemToCart:", name, price, count);

        var item = new Item(name, price, count);
        cart.push(item);
        saveCart();
    };

    obj.setCountForItem = function (name, count) {
        for (var i in cart) {
            if (cart[i].name === name) {
                cart[i].count = count;
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCart = function (name) { // Removes one item
        for (var i in cart) {
            if (cart[i].name === name) { 
                cart[i].count--; 
                if (cart[i].count === 0) {
                    cart.splice(i, 1);
                }
                break;
            }
        }
        saveCart();
    };


    obj.removeItemFromCartAll = function (name) { 
        for (var i in cart) {
            if (cart[i].name === name) {
                cart.splice(i, 1);
                break;
            }
        }
        saveCart();
    };


    obj.clearCart = function () {
        cart = [];
        saveCart();
    }


    obj.countCart = function () { 
        var totalCount = 0;
        for (var i in cart) {
            totalCount += cart[i].count;
        }

        return totalCount;
    };

    obj.totalCart = function () { 
        var totalCost = 0;
        for (var i in cart) {
            totalCost += cart[i].price * cart[i].count;
        }
        return totalCost.toFixed(2);
    };

    obj.listCart = function () { 
        var cartCopy = [];
        console.log("Listing cart");
        console.log(cart);
        for (var i in cart) {
            console.log(i);
            var item = cart[i];
            var itemCopy = {};
            for (var p in item) {
                itemCopy[p] = item[p];
            }
            itemCopy.total = (item.price * item.count).toFixed(2);
            cartCopy.push(itemCopy);
        }
        return cartCopy;
    };

    // ----------------------------
    return obj;
})();


var mywindow;
function proceed()
{
swal.setDefaults({
  input: 'text',
  confirmButtonText: 'Next &rarr;',
  showCancelButton: true,
  animation: false,
  progressSteps: ['1', '2', '3']
})

var steps = [
  {
    title: 'Name:',
    text: 'FILL-UP FORM:'
  },
  'Address:',
  'Contact:'
]

swal.queue(steps).then(function (result) {
  swal.resetDefaults()
  swal({
    title: 'All done!',
    html:
      'Just wait 1-2 days for shipping. <pre>' +
        JSON.stringify("Name:"+result) +
      '</pre>',
    confirmButtonText: 'Thanks!',
    showCancelButton: false
  })
  'window.location.href = "INDEX.html";';
}, function () {
  swal.resetDefaults()
})
}
