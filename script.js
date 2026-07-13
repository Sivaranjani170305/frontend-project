function calculateBill(){

    let name =document.getElementById("cus_name").value;

    let phone =document.getElementById("phone_no").value;

    let address =document.getElementById("address").value;

    let quantity =document.getElementById("quantity").value;

    let total = 0;

    let selected = [];

    let juices =document.querySelectorAll(".juice:checked");

    if(name=="" || phone=="" || address=="" || quantity==""){

        alert("Please fill all fields");

        return;
    }

    if(juices.length==0){

        alert("Please select at least one juice");

        return;
    }

    juices.forEach(function(item){selected.push(item.dataset.name);

        total += Number(item.value);

    });

    total = total * Number(quantity);

    document.getElementById("bill").innerHTML =`<h3>Order Successful </h3>

    Customer Name: ${name}<br>

    Phone Number: ${phone}<br>

    Address: ${address}<br>

    Selected Juices: ${selected.join(", ")}<br>

    Quantity: ${quantity}<br>

    Total Amount: ₹${total}
    `;
}