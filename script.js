//1. Solving problems using array functions on the rest countries' data (https://restcountries.com/v3.1/all)
//a. Get all the countries from the Asia continent /region using the Filter function
//Ans:
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   console.log(result);
   var res=result.filter((ele)=>ele.region==="Asia");
console.log(res);
}
//b. Get all the countries with a population of less than 2 lakhs using Filter function
//Ans:
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   console.log(result);
   var res=result.filter((ele)=>ele.population<200000);
   console.log(res);
}
//c. Print the following details name, capital, flag using forEach function
//Ans:
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   console.log(result);
   result.forEach((a)=>console.log(a.name,a.capital,a.flag));
}
//d. Print the total population of countries using reduce function
//Ans:
var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   console.log(result);
var res=result.reduce((a,b)=>a+b.population,0);
console.log(res);
}
//e. Print the country which uses US Dollars as currency.
var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v2/all");
request.send();
request.onload=function(){
    var result=JSON.parse(request.response);
   var currency = result.filter((element) => {
     for(let key in element.currencies){
        if(element.currencies[key].code === "USD"){
            return element;
        }
     }
   })
        console.log(currency);
    }