const input=document.querySelector('#input').value
const output=document.querySelector('.translated-text')
const btn=document.querySelector('#btn-translate')
var url="https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function errorHandler(error)
{   
    //If server has any problem
    console.log(error)
    alert('Something is wrong with the server try after some time...');
}

btn.addEventListener('click',()=>{

    var finalurl=url+'?'+input
    fetch(finalurl)
    .then(response=>response.json())
    .then(json=>{
        var translatedText=json.contents.translated
        output.innerText=translatedText
    })
    .catch(errorHandler)
})
