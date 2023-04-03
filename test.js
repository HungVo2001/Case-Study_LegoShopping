const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function(button,index){
button.addEventListener("click",function(event){{
    let btnItem = event.target
    let product = btnItem.parentElement
    let productImg = product.querySelector("img").src
    let productName = product.querySelector("H1").innerText
    let productPrice = product.querySelector("span").innerText
    // console.log(productPrice,productImg,productName)
    addcart(productPrice,productImg,productName)
}})
})
function addcart(productPrice,productImg,productName){
    let addtr = document.createElement("tr")
    let cartItem = document.querySelectorAll("tbody tr")
    for(let i = 0; i < cartItem.length; i++ ){
        let productX = document.querySelectorAll(".title")
        if(productX[i].innerHTML == productName){
            alert("Sản Phẩm Đã Có Trong Giỏ Hàng")
            return
        }
    }
    let trcontent = `<tr>
    <td style="display: flex; align-items: center;"><img style="width: 70px;" src="${productImg}" alt=""><span class = "title">${productName}</span></td>
    <td><p><span class = "prices">${productPrice}</span><sup>đ</sup></p></td>
    <td><input style="width: 30px; outline: none;" type="number" value="1" min="1"></td>
    <td style="cursor: pointer;"><span class = "cart-delete" onclick="deleteCart()">Xóa</span></td>
    </tr>
    `
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)
    // thêm sản phẩm vào Cart

    carttotal()
    deleteCart()
}
// ~~~~~~~ totalprice
function carttotal(){
    let cartItem = document.querySelectorAll("tbody tr")   //Sản Phẩm trong giỏ hàng
    let sum = 0;
    // console.log(cartItem.length)
    for(let i = 0; i < cartItem.length; i++ ){
        let inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        let productPrice = cartItem[i].querySelector(".prices").innerHTML
        // console.log(productPrice)
        totalX = inputValue*productPrice
        // console.log(totalY)
        // sum = sum + totalX
        sum += totalX
        // totalY = sum.toLocaleString('de-DE')
        // console.log(sum)
    }
    let carttotalX = document.querySelector(".price-total span")
    let cartPrice = document.querySelector(".cart-icon span")
    carttotalX.innerHTML = sum.toLocaleString('de-DE')
    cartPrice.innerHTML = sum.toLocaleString('de-DE')
    inputChange()                          //thêm hàm inputChange
    // console.log(sum)
    // Thực hiên vòng lặp và tính tổng giữa input và thẻ span 
}
//~~~~~DeleteCArrt
function deleteCart(){
    let cartItem = document.querySelectorAll("tbody tr")
    for(let i = 0; i < cartItem.length; i++ ){
        let productX = document.querySelectorAll(".cart-delete")
        productX[i].addEventListener("click",function(event){
            let cartDelete = event.target
            let cartItemR = cartDelete.parentElement.parentElement
             cartItemR.remove()
            //  console.log(cartItemR)
            carttotal()
        })
    }
}
function inputChange(){     //Chúng ta chỉ mới định nghĩa hàm inputChange thôi, muốn gói thì phải thêm ở dòng 59
    let cartItem = document.querySelectorAll("tbody tr")
    for(let i = 0; i < cartItem.length; i++ ){
        let inputValue = cartItem[i].querySelector("input")
        inputValue.addEventListener("change",function(){    
            carttotal()
        })
    }
}
const cartbtn = document.querySelector(".fa-circle-xmark")
const cartshow = document.querySelector(".fa-cart-shopping")
cartshow.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "0"
})
cartbtn.addEventListener("click",function(){
    document.querySelector(".cart").style.right = "-100%"
})
