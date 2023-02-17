document.getElementById('kitkat-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('kitkat-quantity').value;
    const quantity = getInputValue('kitkat-quantity');

    const kitkatCost = quantity * 200;

    // document.getElementById('kitkat').innerText = kitkatCost;
    /* 
        ai linta re-useable function call korar jonno nicher function toiri 
        korechi jeno function ti id r value niya akshate call korte pare.

    */
    setInnerText('kitkat', kitkatCost);
    total();


})

document.getElementById('rose-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('rose-quantity');
    const roseCost = quantity * 100;
    // document.getElementById('rose').innerText = roseCost;
    setInnerText('rose', roseCost);
    total();


})

document.getElementById('diary-buy-btn').addEventListener('click', function(){
    // const quantity = document.getElementById('rose-quantity').value;
    const quantity = getInputValue('diary-quantity');
    const diaryCost = quantity * 100;
    // document.getElementById('diary').innerText = diaryCost;
    setInnerText('diary', diaryCost);
    total();


})

function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

function getInputValue(id){
    const value = document.getElementById(id).value;
    return parseInt(value);
}

function total(){
    const chocolet = document.getElementById('kitkat').innerText;
    const rose = document.getElementById('rose').innerText;
    const diary = document.getElementById('diary').innerText;
    const totalSum = parseInt(chocolet) + parseInt(rose) + parseInt(diary);
    setInnerText('total', totalSum);

}
document.getElementById('apply-btn').addEventListener('click', function(){
    const promoCode = getInputValue('promo-code');
    
    if(promoCode == 101){
        const total = document.getElementById('total').innerText;
        const sum = total - parseInt(total) * 0.1;
        setInnerText('all-total', sum)

    } else {
        alert('wrong promo code try again with valid promo cose');

    }
})