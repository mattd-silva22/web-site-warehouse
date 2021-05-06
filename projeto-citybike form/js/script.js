// code by matheus


let city_list = ["Recife-PE" , "Aracaju-SE" , "Salvador-BA" , "Lençois-BA" , "Porto Seguro-BA" , "Ouro Preto-MG", "Belo Horizonte-MG", "Rio de Janeiro-RJ"]
let resultList = document.getElementById('resultado')
let nome = document.getElementById('user-nome')
let cidade = document.getElementById('nome-cidade')
new URLSearchParams(window.location.search).forEach((value, name) => {
    // resultList.append( name , "  :  " , value)
    if ( name == "username" ) {
        nome.append(value)
    }

    if ( name == "usercity") {


        let x = value - 1

         

        
        cidade.append(city_list[x])
    }
    
    

   

})