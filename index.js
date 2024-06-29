const rollthedice=()=>{
    let val = document.getElementById("num").value;
    let result = document.getElementById("result");
    let imgs = document.getElementById("imgs");
    let vals=[];
    let images=[];
    for(let i=0;i<val;i++){
        let nums = Math.floor(Math.random()*6)+1;
        vals.push(nums);
        images.push(`<img src="${nums}.png" height="200" width="200">`);
    }
    result.innerText=`You have rolled dice(s) ${vals.join(',')}`;
    imgs.innerHTML=images.join('');
}

