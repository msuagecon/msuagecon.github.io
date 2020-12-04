toggleTable = function(){
    let crop = document.getElementById("wasdecrops").value;
    let contWheat = document.getElementById("wheat");
    let contCorn = document.getElementById("corn")

    if (crop === 'wheat') {
        contWheat.style.display = 'block';
        contCorn.style.display = 'none';
    } else if (crop === 'corn') {
        contCorn.style.display = 'block';
        contWheat.style.display = 'none';
    } else {
        contWheat.style.display = 'none';
        contCorn.style.display = 'none';
    }
}