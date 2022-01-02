function sorteio()
{
    const min = document.getElementById('inputNumberMin').value;
    const max = document.getElementById('inputNumberMax').value;

    let randomNumber = Math.floor((Math.random() * max) + min);
    document.getElementById('resultado').innerHTML = randomNumber;
}
