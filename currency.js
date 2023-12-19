const canadianDollar= 0.728;
function roundTwo(amount) {
     return Math.round (amount*100)/100;
    
}
exports.canadianToUS = (canadian)=>{
    var amount= canadian* canadianDollar;
   return roundTwo(amount);

};
exports.USToCanadian =(us)=>{
    var amount= us/ canadianDollar;
    return roundTwo(amount);
};
