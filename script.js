let Link=`https://api.breakingbadquotes.xyz/v1/quotes`
let head=document.createElement('header')
let h5=document.createElement('h5');
h5.innerHTML='click the below button to generate the Quotes from "BREAKING BAD" series'
btnRandam=document.createElement('button')
btnRandam.setAttribute('onclick','randomQuotes()')
btnRandam.innerHTML='Random Quotes'
btnUserRequest=document.createElement('button')
btnUserRequest.setAttribute('onclick','userRquest()')
btnUserRequest.setAttribute('style','left:20px')
btnUserRequest.innerHTML='Request Quotes'
head.append(h5,btnRandam,btnUserRequest)
document.body.append(head)
let main=document.createElement('main')
main.setAttribute('style','top: 30px')
document.body.append(main)

async function randomQuotes(){
    clearData();
    let res=await fetch(Link)
    let res1=await res.json()
    for (var i in res1){
        let doutput=(`Quote: ${res1[i].quote} `)
        let aoutput=(`- ${res1[i].author}`)
        let div=document.createElement('div')
        div.innerHTML=doutput
        main.append(div)
        let div1=document.createElement('div')
        div1.classList='divi'
        div1.setAttribute('style','right:60px')
        div1.innerHTML=aoutput
        main.append(div1)
    }
}

async function userRquest(){
    clearData();
    let value=Number(prompt(`How many Dialogues you want! (can load only 87 quotes at once)`))
    let reslink=(`${Link}/${value}`)
        let res=await fetch(reslink)
        let res1=await res.json();
        for ( var i=0;i<value;i++){
            let div3=document.createElement('div')
            let doutput=(`Quote: ${res1[i].quote}`)
            div3.innerHTML=doutput
            main.append(div3)
            let div4=document.createElement('div')
            div4.classList='divi'
            div4.setAttribute('style','right:60px')
            let aoutput=(`- ${res1[i].author}`)
            div4.innerHTML=aoutput
            main.append(div4)
        }    
}

function clearData(){
    let res=main.innerHTML=''
    return res;
}

