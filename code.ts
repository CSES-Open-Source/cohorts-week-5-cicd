function   sayHello(name ){console.log("Hello " +   name )
}

function add(a , b){ const   c =  a +b ; return  c }

async function   main ( ){
 const user="Brandon"
sayHello(   user )
const result=add(  5 ,   10 )   
 console.log("result:",result )
 const unused=123
 if(result>10){console.log("big number")
 }else{ console.log("small")}

}

 main(   )