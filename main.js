function _(script){
        var q = script;
        let arr = q.split(" ")
        let fun = arr[0];
        arr.shift();
        for(let a in arr){
            if(arr[a][0] == "%"){
                arr[a] = eval(arr[a].replaceAll("%",""));
            }
            if(arr[a][0] != "'"){
                arr[a] = "'" + arr[a] + "'";
            }
        }
        let str = arr.toString();
        eval(fun + "(" + str + ")")
    }
function set(vl, to, vr){
    window[vr] = vl;
}
