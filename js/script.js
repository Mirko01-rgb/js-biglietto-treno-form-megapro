var generaBtn = document.getElementById('genera');
var annullaBtn = document.getElementById('annulla');
var costo = 0.21;
var costoTotale = 0;
var minorenne;
var over65;

generaBtn.addEventListener('click', function(){
  // console.log('Ho cliccato sul pulsante genera');

  var name = document.getElementById('name').value;      // cosi memorizzi il Nome Cognome che inserisci
  // console.log(name);

  var distance = document.getElementById('distance').value;
  // console.log(distance);
  var eta = document.getElementById('eta').value;
  // console.log(eta);

  console.log(name, distance, eta);

  if( name !== '' && distance > 0 && eta !== ''){
   console.log('ok');

   costoTotale = costo * distance;
   console.log(costoTotale);

   if( eta == '1'){
      costoTotale = costo * distance / 100 * 80;
    }

    else if (eta == '3') {
      costoTotale = costo * distance / 100 * 60;
  }



  document.getElementById('costo-totale').innerHTML = parseFloat(costoTotale.toFixed(2));

} else{
   console.log('nah');
 }


})


annullaBtn.addEventListener('click', function(){
  console.log('Ho cliccato sul pulsante annulla');
})
