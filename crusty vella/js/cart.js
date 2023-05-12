const addCart = document.querySelectorAll('.btn4');


const cartShow = document.querySelector('.text1 span');

for(var i = 0; i < addCart.length; i++){
    addCart[i].addEventListener('click', () => {
        cartcount();
    })
}
function cartcount(){
    let prdCount = localStorage.getItem('cartsCount');
    prdCount = parseInt(prdCount)
    if(prdCount){
        localStorage.setItem('cartsCount', prdCount + 1);
        cartShow.textContent = prdCount + 1
    }else{
        localStorage.setItem('cartsCount', 1 );
        cartShow.textContent = prdCount = 1
    }

}
function displayCart(){
    let prdCount = localStorage.getItem('cartsCount');
    if(prdCount){
        cartShow.textContent = prdCount;
    }
}
displayCart();





function product_info(product_name,price,image){

    if(localStorage.getItem('name')==null){
    localStorage.setItem('name','[]');

}
 var chk = JSON.parse(localStorage.getItem('name'));


if(chk.indexOf(product_name) !== -1)  
{  
    let nprdCount = localStorage.getItem('cartsCount');
    nprdCount = parseInt(nprdCount)
    localStorage.setItem('cartsCount', nprdCount - 1);
        alert("Yes, the value exists!")  
}   
else
{

        if(localStorage.getItem('name')==null){
            localStorage.setItem('name','[]');

        }
        if(localStorage.getItem('price')==null){
            localStorage.setItem('price','[]');

        }
        if(localStorage.getItem('image')==null){
            localStorage.setItem('image','[]');

        }

        var old_data1 = JSON.parse(localStorage.getItem('name'));
        old_data1.push(product_name);
        var old_data2 = JSON.parse(localStorage.getItem('price'));
        old_data2.push(price);
        var old_data3 = JSON.parse(localStorage.getItem('image'));
        old_data3.push(image);

        localStorage.setItem('name',JSON.stringify(old_data1));
        localStorage.setItem('price',JSON.stringify(old_data2));
        localStorage.setItem('image',JSON.stringify(old_data3));

}

    
}




function favourite_product_info(product_name,price,image){

    if(localStorage.getItem('fname')==null){
    localStorage.setItem('fname','[]');

}
 var chk = JSON.parse(localStorage.getItem('fname'));


if(chk.indexOf(product_name) !== -1)  
{  
        alert("Yes, the value exists!")  
}   
else
{


if(localStorage.getItem('fprice')==null){
    localStorage.setItem('fprice','[]');

}
if(localStorage.getItem('fimage')==null){
    localStorage.setItem('fimage','[]');

}

var fold_data1 = JSON.parse(localStorage.getItem('fname'));
fold_data1.push(product_name);
var fold_data2 = JSON.parse(localStorage.getItem('fprice'));
fold_data2.push(price);
var fold_data3 = JSON.parse(localStorage.getItem('fimage'));
fold_data3.push(image);

localStorage.setItem('fname',JSON.stringify(fold_data1));
localStorage.setItem('fprice',JSON.stringify(fold_data2));
localStorage.setItem('fimage',JSON.stringify(fold_data3));
}
}


