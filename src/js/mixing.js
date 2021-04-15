let javascriptDeveloper = {
    knowsJs() {
        console.log("test1");
    }
}

let webdeveloper = {
    cssKnow() {
        console.log("test");
    }
}


let mixingObj = Object.assign({}, javascriptDeveloper, webdeveloper);

console.log(mixingObj);