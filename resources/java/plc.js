
//Format input boxes
$('#mya').on('change, keyup', function() {
    const currentInput = $(this).val();
    const fixedInput = currentInput.replace(/[A-Za-z!@#$%^&*()]/g, '');
    $(this).val(fixedInput);
});

//Function to calculate PLC payment rate and by acre
revenueCalculation = function() {
    //Pull in user inputs
    let crop = document.getElementById("crops").value;
    let mya = Number(document.getElementById("mya").value);
    let fsayield = Number(document.getElementById("fsayield").value);
    let result1;
    let result2;
    //If then statements to produce results based on selected crops
    if (crop === 'corn') {
        result1 = Math.round(Math.max(0, 3.70 - Math.max(mya, 2.20))*100)/100;
        result2 = Math.round((Math.max(0, 3.70 - Math.max(mya, 2.20))*0.85*fsayield)*100)/100;
    } else if(crop === 'soybeans') {
        result1 = Math.round(Math.max(0, 8.40 -  Math.max(mya, 6.20))*100)/100;
        result2 = Math.round((Math.max(0, 8.40 -  Math.max(mya, 6.20))*0.85*fsayield)*100)/100;
    } else if(crop === 'seedcotton') {
        result1 = Math.round(Math.max(0, 0.367 -  Math.max(mya, 0.2500))*100)/100;
        result2 = Math.round((Math.max(0, 0.367 -  Math.max(mya, 0.2500))*0.85*fsayield)*100)/100;
    } else if(crop === 'longrice') {
        result1 = Math.round(Math.max(0, 0.1400 -  Math.max(mya, 0.0700))*100)/100;
        result2 = Math.round((Math.max(0, 0.1400 -  Math.max(mya, 0.0700))*0.85*fsayield)*100)/100;
    } else if(crop === 'shortrice') {
        result1 = Math.round(Math.max(0, 0.1400 -  Math.max(mya, 0.0700))*100)/100;
        result2 = Math.round((Math.max(0, 0.1400 -  Math.max(mya, 0.0700))*0.85*fsayield)*100)/100;
    } else if(crop === 'peanuts') {
        result1 = Math.round(Math.max(0, 0.2675 -  Math.max(mya, 0.1775))*100)/100;
        result2 = Math.round((Math.max(0, 0.2675 -  Math.max(mya, 0.1775))*0.85*fsayield)*100)/100;
    } else if(crop === 'wheat') {
        result1 = Math.round(Math.max(0, 5.50 -  Math.max(mya, 3.38))*100)/100;
        result2 = Math.round((Math.max(0, 5.50 -  Math.max(mya, 3.38))*0.85*fsayield)*100)/100;
    }

    const currencyResult1 = "$"+result1.toFixed(2);
    const currencyResult2 = "$"+result2.toFixed(2);

    //Output back to document
    document.getElementById('rateOutput').value = currencyResult1;
    document.getElementById('acreOutput').value = currencyResult2;
}

unitDeterminer = function() {
    let crop = document.getElementById("crops").value;
    let unitResult;

    if (crop === 'corn') {
        price = '4.00';
        unitResult = 'bushels';
    } else if(crop === 'soybeans') {
        price = '10.40';
        unitResult = 'bushels';
    } else if(crop === 'seedcotton') {
        price = '0.3378';
        unitResult = 'pounds';
    } else if(crop === 'longrice') {
        price = '0.1170';
        unitResult = 'pounds';
    } else if(crop === 'shortrice') {
        price = '0.1180';
        unitResult = 'pounds';
    } else if(crop === 'peanuts') {
        price = '0.2025';
        unitResult = 'pounds';
    } else if(crop === 'wheat') {
        price = '4.70';
        unitResult = 'bushels';
    }

    document.getElementById('unitOutput').value = unitResult;
    document.getElementById('mya').value = price;
}

seedCotton = function() {
    let lintPrice = Number(document.getElementById("lintprice").value);
    let seedPrice = Number(document.getElementById("cottonseedprice").value);
    let lintProd = Number(document.getElementById("lintprod").value);
    let seedProd = Number(document.getElementById("seedprod").value);
    let seedCottonPrice;

    seedCottonPrice = Math.round(((lintPrice*(lintProd*1000000*480)) + (seedPrice*(seedProd*1000000*2000)))/((lintProd*1000000*480)+(seedProd*1000000*2000))*10000)/10000;
    seedCottonPrice = "$"+seedCottonPrice.toFixed(4)
    document.getElementById("seedcottonmya").value = seedCottonPrice;
}

function setTwoNumberDecimal(event) {
    this.value = parseFloat(this.value).toFixed(2);
}