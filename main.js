function increase(id) {
    let counter = document.querySelectorAll('[data-id="counter-' + id + '"]')[0];
    let counter_value = parseInt(counter.innerText);
    counter_value++;
    let formatted = ("0" + counter_value).slice(-2);
    counter.innerText = formatted;
}

function decrease(id) {
    let counter = document.querySelectorAll('[data-id="counter-' + id + '"]')[0];
    let counter_value = parseInt(counter.innerText);

    if(counter_value > 1) {
        counter_value--;
    }

    let formatted = ("0" + counter_value).slice(-2);
    counter.innerText = formatted;
}

function increase(x) {
    var val = document.getElementsByClassName('count');
    this.innerHTML=val+1;
}
function decrease(ele) {
    // body...
    var x = this.id;
    var y = document.getElementById(x).nextSibling.innerHTML;
    document.getElementById(x).nextSibling.innerHTML=y-1;
}
