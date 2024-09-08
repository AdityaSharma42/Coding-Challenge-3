function calculateAverageSales(Sales) {
return Sales.length===0? 0: Sales.reduce((sum,Sale)=> sum+ Sale,0)/Sales.length;
}
let SalesFigures= [4590,18400,2130,8800]
let average = calculateAverageSales (SalesFigures);
console.log ('The average sales are', average);

function determinePerformanceRating (AverageSales) {
    if (AverageSales>10000)
        return "Excellent";
    elseif (AverageSales>= 7000)
    return "Good";
elseif (AverageSales>=4000)
return "Satisfactory";
elseif (AverageSales<4000)
return "Needs Improvement";
}