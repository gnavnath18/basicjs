const form=document.querySelector('#details');
form.addEventListener('submit',function (e){
    e.preventDefault();
    const wg= parseInt (document.querySelector('#wg').value);
    const hg =parseInt(document.querySelector('#hg').value);
    const result=document.querySelector('#result');

    if(wg===''|| wg<0 || isNaN(wg)){
        result.innerHTML='enter valid weight';

    }
    else if(hg===''|| hg<0 || isNaN(hg)){
        result.innerHTML="enter valid height";


    }
    else{
        const bmi=((wg/(hg*hg))*10000).toFixed(3);
        result.innerHTML= `<span>${bmi}</span>`
    }




})



