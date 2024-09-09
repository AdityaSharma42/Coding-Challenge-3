function calculateAverageSales(Sales) {
return Sales.length===0? 0: Sales.reduce((sum,Sale)=> sum+ Sale,0)/Sales.length;
}// The program will return 0 if no information is entered. Otherwise
let SalesFigures= [4590,18400,2130,8800]
let average = calculateAverageSales (SalesFigures);
console.log ('The average sales are', average);

function determinePerformanceRating (averageSales) {
if (averageSales>10000){
    return "Excellent";

} else if (averageSales>=7000) {
    return "Good";
} else if (averageSales>=4000) {
        return "Satisfactory";
    } else {
        return "Needs Improvement";
    }
}
let perfating= determinePerformanceRating (averageSales);

