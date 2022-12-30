function play(type){
    img=0;
    randomNum=Math.floor(Math.random()*10);
    status=0;
    icon=0;
    switch(randomNum){
        case 0:
            randomNum="rock";
            if(type=="paper"){
                img="./images/icon-paper.svg";
                status="win";
                icon="success";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="scissors"){
                icon="error";
                img="./images/icon-rock.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-rock.svg";
                status="fair"
            }
            Swal.fire({
                icon:icon,
                title:status,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 1:
            randomNum="rock";
            if(type=="paper"){
                icon="success";
                img="./images/icon-paper.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }
            else if(type=="scissors"){
                icon="error";
                img="./images/icon-rock.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-rock.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 2:
            randomNum="rock";
            if(type=="paper"){
                icon="success";
                img="./images/icon-paper.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }
            else if(type=="scissors"){
                icon="error";
                img="./images/icon-rock.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-rock.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 3:
            randomNum="paper";
            if(type=="scissors"){
                icon="success";
                img="./images/icon-scissors.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="rock"){
                icon="error";
                img="./images/icon-paper.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-paper.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 4:
            randomNum="paper";
            if(type=="scissors"){
                status="win";
                icon="success";
                img="./images/icon-scissors.svg";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="rock"){
                icon="error";
                img="./images/icon-paper.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-paper.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 5:
            randomNum="paper";
            if(type=="scissors"){
                icon="success";
                img="./images/icon-scissors.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="rock"){
                icon="error";
                img="./images/icon-paper.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-paper.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 6:
            randomNum="scissors";
            if(type=="rock"){
                icon="success";
                img="./images/icon-rock.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="paper"){
                icon="error";
                img="./images/icon-scissors.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-scissors.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 7:
            randomNum="scissors";
            if(type=="rock"){
                status="win";
                icon="success";
                img="./images/icon-rock.svg";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="paper"){
                icon="error";
                img="./images/icon-scissors.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-scissors.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 8:
            randomNum="scissors";
            if(type=="rock"){
                icon="success";
                img="./images/icon-rock.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="paper"){
                icon="error";
                img="./images/icon-scissors.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-scissors.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
        case 9:
            randomNum="scissors";
            if(type=="rock"){
                icon="success";
                img="./images/icon-rock.svg";
                status="win";
                pvalue=document.getElementById("value");
                num=parseInt(pvalue.innerHTML);
                num+=1;
                pvalue.innerHTML=num;
            }else if(type=="paper"){
                icon="error";
                img="./images/icon-scissors.svg";
                status="lose";
            }
            else{
                icon="question";
                img="./images/icon-scissors.svg";
                status="fair"
            }
            Swal.fire({
                title:status,
                icon:icon,
                text:"THE HOUSE CHOSE: "+randomNum,
                imageUrl: img
            })
            break
    }
}