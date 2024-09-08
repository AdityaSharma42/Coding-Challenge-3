function calculateAverageSales(Sales) {
return Sales.length===0? 0: Sales.reduce((sum,Sale)=> sum+ Sale,0)/Sales.length;
}
let SalesFigures= [4590,18400,2130,8800]
let average = calculateAverageSales (SalesFigures);
console.log ('The average sales are', average);

function determinePerformanceRating (AverageSales) {
if (AverageSales>10000){
    return "Excellent";

} else if (AverageSales>=7000) {
    return "Good";
} else if (AverageSales>=4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }

let perfating= determinePerformanceRating (AverageSales);
}
