function calculateAverageSales(Sales) {
return Sales.length===0? 0: Sales.reduce((sum,Sale)=> sum+ Sale,0)/Sales.length;
}// The program will return 0 if no information is entered. Otherwise, the values in the array will be added and then divided by the numnber of values to determine the average
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
}// this section of the code is a simple series of if-else that displays different messages based on what the average value is.
let performanceRating = determinePerformanceRating(SalesFigures);

console.log('Average Sales Rating is', performanceRating)

const salesteam= [
    {name: 'Alex',TotalSales: 17000},
    {name: 'Shia',TotalSales: 9000},
    {name: 'Burt',TotalSales: 5000},
    {name: 'Shia',TotalSales: 1000},
];
function findTopandBottomPerformers (salesteam){
    let MaxSales= Math.max (salesteam.map (name=>name.TotalSales));
    let MinSales= Math.min (salesteam.map (name=> name.TotalSales));
    return MaxSales
    
    
}
console.log ('The top performer is:', );
console.log ('The bottom performer is:', );

let topperformer=findTopandBottomPerformers (salesteam);