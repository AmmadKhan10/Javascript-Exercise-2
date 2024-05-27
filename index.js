//<----------------Question No #01---------------->
function Converter() {
    let data = parseFloat(document.getElementById("input1").value);
    let fahren = (data *9 / 5) + 32;
    document.getElementById("para1").innerHTML=`The Celsius of ${data} is ${fahren} Fahrenheit`;
}

//<----------------Question No #02---------------->
var classification  = ["John Hill" , "Mary Jane", "Gary Vee", "Paricia Mills", "Helen Hall", "Paul Green" ];
document.getElementById("para3").innerHTML=classification;
let best = classification.slice(-3,)
document.getElementById("para2").innerHTML=`the three best students are: <br> 1. ${best[2]} <br> 2. ${best[1]} <br> 3. ${best[0]}`;


//<----------------Question No #03---------------->
var course = {
    'title': "Learn to Code in Python 3",
    'categories': ['programming', 'technology', 'python'],
    '5_stars_reviews': 420,
    '4_stars_reviews': 80,
    '3_stars_reviews': 33,
    '2_stars_reviews': 20,
    '1_stars_reviews': 4
}
    document.getElementById("para4").innerHTML=`Course title: ${course.title}`;      
    document.getElementById("para5").innerHTML=`Course categories: ${course.categories[0]}`;      


    var shoppingList = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"]; 
    document.getElementById("para6").innerHTML=`${shoppingList}`; 
    let str =shoppingList.pop() 
    document.getElementById("para8").innerHTML=`Chocolate, ${shoppingList}`;

    var shoppingList1 = ["Milk", "Butter", "Juice", "Bread", "Beer", "Rice", "Potatoes", "Chocolate"];
    shoppingList1.push("Cheese, Eggs"); 
    document.getElementById("para9").innerHTML = shoppingList1;
       
