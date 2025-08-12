
const daily_length = data.length / 3;
let counter = 80;

function get_daily(){
    const now = Math.floor((Date.now() - 1440000) / 86400000)
    console.log(now);
    set_dadku(now)
}

function set_dadku(cur){


    const index = 3 * (cur % daily_length)
    console.log(cur % daily_length);
    document.getElementById("daily").innerHTML = data[index]
    console.log(data[index ]);
    document.getElementById("daily1").innerHTML = data[index + 1]
    console.log(data[index + 1]);
    document.getElementById("daily2").innerHTML = data[index + 2]
    console.log(data[index + 2]);
}

function iterate(){
    counter = counter +1;
    set_dadku(counter);
}

get_daily()