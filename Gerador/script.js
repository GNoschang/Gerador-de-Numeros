function gerar() {

    let min = 1
    let max = 100
    let dif = max - min
    let aleatorio = Math.random() 
    let num = min + Math.trunc(dif * aleatorio)
        

        let res = document.getElementById('result')
        
        res.innerHTML = ''
        
        res.innerHTML += `  \u{1f449} ${num} `
        
        res.innerHTML += ` <p> \u{1f601}</p> `    

}


function limpar(){
    
    let res = document.getElementById('result')
    res.innerHTML = ''
}