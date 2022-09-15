var userGenderMale = "мъж";
var userGenderFemale = "жена";

alert("Мазе bot v1 на Вашите услуги");

var userFirstName = prompt("Как се казваш - първо име");
var userSecondName = prompt("Как се казваш - фамилия");
var userAge = prompt("На колко години си");
var userGender = prompt("Какъв пол си");


console.log(`Първо име ${userFirstName}`);
console.log(`Второ име ${userSecondName}`);
console.log(`Години ${userAge}`);
console.log(`Пол ${userGender}`);

var userUnderaged = userAge <18;
var userAdult = userAge>= 18;
var userMale = userGender == "мъж";
var userFemale = userGender == "жена";

if(userMale && userAdult) {
    alert(`Здравейте, г-н ${userSecondName}`);
}
else if(userFemale && userAdult) {
    alert(`Здравейте, г-жо ${userSecondName}`);

}
else if(userMale && userUnderaged) {
    alert("Здрасти малкия, не пускаме дечица тук - бягай за бира");
}    
else if(userFemale && userUnderaged) {
    alert("Здрасти, малката, не пускаме дечица тук - отивай да си играеш");
}
if(userFemale) {
    alert(`Добре дошла в мазето на баба ${userFirstName} ${userSecondName}`);
    alert(`Ти си на ${userAge} години`);

}
else if(userMale) {
    alert(`Добре дошъл в мазето на баба ${userFirstName} ${userSecondName}`);
    alert(`Ти си на ${userAge} години`);

}
 
var productIdAppleWine = "ябълково вино";
var productIdSmokedMeat = "пушено месо";
var productIdPlumJam = "сливов мармалад";
var productIdMarinatedPeppers = "мариновани чушки";
var productIdPiggyBank = "прасенце касичка";

var productIdAppleWineCount = "10";
var productIdSmokedMeatCount = "5";
var productIdPlumJamCount = "9";
var productIdMarinatedPeppersCount = "4";
var productIdPiggyBankAmmount = "184,35";

var productIdAppleWineSerialNumber = `С7544_${productIdAppleWineCount}`;
var productIdSmokedMeatSerialNumber = `M7741_${productIdSmokedMeatCount}`;
var productIdPlumJamSerialNumber = `S6491_${productIdPlumJamCount}`;
var productIdMarinatedPeppersSerialNumber = `P7485_${productIdMarinatedPeppersCount}`;
var productIdPiggyBankSerialNumber = `B6584_${productIdPiggyBankAmmount}`;

    alert(`Отчет за продуктите в мазето`);
console.log(`${productIdAppleWine} ${productIdAppleWineCount} ${productIdAppleWineSerialNumber}`);
console.log(`${productIdSmokedMeat} ${productIdSmokedMeatCount} ${productIdSmokedMeatSerialNumber}`);
console.log(`${productIdPlumJam} ${productIdPlumJamCount} ${productIdPlumJamSerialNumber}`);
console.log(`${productIdMarinatedPeppers} ${productIdMarinatedPeppersCount} ${productIdMarinatedPeppersSerialNumber}`);
console.log(`${productIdPiggyBank} ${productIdPiggyBankAmmount} ${productIdPiggyBankSerialNumber}`);

if(userAdult) {
var donationResponse = prompt("Искате ли да направите дарение? да / не");
var isDonationProcessable = donationResponse == "да";

}
if(isDonationProcessable) {
var donationAmount = prompt("Моля въведете сумата на вашето дарение");
console.log(donationAmount);

var donationTax = (donationAmount * 20) / 100;
console.log(donationTax);

var totalAmount = (+donationAmount) + donationTax;
alert(`Дължите сумата от ${totalAmount}`);
}
else{
alert(`Засрами се, не искаш да даваш кинти за баба`);    
}