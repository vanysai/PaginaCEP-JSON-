function buscarCep(){
    let cep = document.getElementById("cep").value 
    let endereco = document.getElementById("endereco")
    let cepValido = cep.substr(0,5) + "-" + cep.substr(5) + ".json"
    let url = "https://cdn.apicep.com/file/apicep/"+cepValido
    fetch(url)
        .then(res => res.json())
        .then(data =>{
            endereco.innerHTML =  data.address+"<br>"+data.district+"<br>"+
            data.city+"<br>"+data.state+"<br>Brasil"
        })
}