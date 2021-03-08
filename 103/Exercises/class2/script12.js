
function helloWorld(lang){
    if(lang == "en"){
        return console.log("Hello world");
    }else if(lang == "es"){
        return console.log("Hola mundo");
    }else if(lang == "fr"){
        return console.log("Bounjour tuet le monde");
    }else if(lang == "it"){
        return console.log("Ciso tutto il mundo");
    }else{
        return "Invalid language"
    }
}

console.log(helloWorld('en'));
console.log(helloWorld('es'));
console.log(helloWorld('fr'));
console.log(helloWorld('it'));

switch(prompt('What is the weather like?')){
    case 'rainy':
        console.log("Remember to bring an umbrella");
        break;
    case 'sunny':
        console.log("Wear sunscreen");
        break;
    case 'cloudy':
        console.log('Go outside');
        break;
    case 'unknown weather':
        console.log("unknown");
        break;
};