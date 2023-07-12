
function f(x) {
    document.getElementById('input').value += x;
}
function del() {
    document.getElementById('input').value='';
}
function cal() {
    let x = document.getElementById('input').value;
    let res;
    res = eval(x);
    document.getElementById('input').value = res;
}