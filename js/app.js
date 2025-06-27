//Cria uma lista (array) vazia chamada amigos, onde vamos guardar os nomes dos participantes.
let amigos = []

function adicionar () {
    let amigo = document.getElementById('nome-amigo') // Pega o campo de input do nome

    // Se o campo estiver vazio, mostra um alerta e para a função
    if (amigo.value == '') {
        alert('Informe o nome do amigo!') 
        return
    }

    // Se o nome já estiver na lista, mostra outro alerta e não adiciona
    if(amigos.includes(amigo.value)){
        alert('Nome já adicionado!') 
        return
    }

    // Pega o elemento que mostra a lista de amigos na tela
    let lista = document.getElementById('lista-amigos')

    // Adiciona o nome digitado na lista (array) de amigos
    amigos.push(amigo.value)

    // Se for o primeiro nome, mostra sozinho
    if (lista.textContent == '') {
        lista.textContent = amigo.value 
    } else {
        // Se já tiver nome, adiciona separado por vírgula
        lista.textContent = lista.textContent + ", " + amigo.value
    }

    // Limpa o campo do input depois de adicionar
    amigo.value = ''
}

function sortear () {
    // Verifica se há pelo menos 4 amigos na lista
    if (amigos.length < 4) {
        alert ('Adicione pelo menos 4 amigos!')
        return
    }

    // Embaralha a ordem dos amigos
    embaralha(amigos)

    // Pega o elemento onde será mostrada a lista sorteada
    let sorteio = document.getElementById('lista-sorteio')

    // Faz o sorteio em que cada amigo tira o próximo da lista
    for (let i = 0; i < amigos.length; i ++) {
        if(i == amigos.length - 1) {
            // O último tira o primeiro
            sorteio.innerHTML += amigos[i] + '-->' + amigos[0] + '<br>'
        } else {
            // Os outros tiram o próximo
            sorteio.innerHTML += amigos[i] + '-->' + amigos[i + 1] + '<br>'
        }  
    }
}

// Essa função faz o embaralhamento da lista de amigos para deixar o sorteio aleatório.
function embaralha(lista) {
    // Embaralha a lista usando o algoritmo de Fisher-Yates
    for (let indice = lista.length; indice; indice--) {

        // Gera um índice aleatório
        const indiceAleatorio = Math.floor(Math.random() * indice);

        // Troca os elementos de lugar usando "destructuring"
        [lista[indice - 1], lista[indiceAleatorio]] = 
            [lista[indiceAleatorio], lista[indice - 1]];
    }
}


function reiniciar () {
    amigos = [] // Zera a lista de amigos

    // Limpa o texto da lista de amigos e da lista de sorteio na tela
    lista = document.getElementById('lista-amigos').innerHTML = ''
    document.getElementById('lista-sorteio').innerHTML = ''
}
