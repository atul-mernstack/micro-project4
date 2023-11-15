let sign = ['x', '-', '+', '/'];
let evalstring = ''
const inputfun = (val) => {
    let ele = document.getElementById('screen');
    if (ele.innerHTML == '0' && !sign.includes(val)) {
        ele.innerHTML = ''
    }
    if (ele.innerHTML.length >= 1 && ele.innerHTML.substring(ele.innerHTML.length - 1) == '.' && val == '.') {
        alert("Not allowed")
        return false;
    }
    if (val == '=') {
        if (val != '' && sign.includes(ele.innerHTML.substring(ele.innerHTML.length - 1))) {
            alert('Bad express trying')
            return false;
        }
        if (ele.innerHTML == '') {
            ele.innerHTML = '0'
            return
        }
        evalstring = ele.innerHTML
        evalstring=evalstring.replace('x', '*')
        //evalstring+=""
        console.log(evalstring + "-----" + ele.innerHTML)
        let a = eval(evalstring+" ")
        a = (a / 1).toFixed(3)
        ele.innerHTML = a + '';
        return;
    }
    if (val == 'r') {
        ele.innerHTML = 0;
        return;
    }
    if (val == 'd') {
        let cur = (ele.innerHTML).substring(0, ele.innerHTML.length - 1)
        if (cur.length == 0)
            cur = "0"
        ele.innerHTML = cur
        return;
    }
    if (!checkAllowed(ele.innerHTML, val)) {
        return;
    }
    ele.innerHTML += val
}

const checkAllowed = (val, cur) => {
    let arr = ['-', '+', '/', 'x'];
    if ((val.length == 0 && arr.includes(cur)) || (arr.includes(val.substring(val.length - 1)) && arr.includes(cur))) {
        alert('Bad express trying')
        return false;
    }
    return true;

}