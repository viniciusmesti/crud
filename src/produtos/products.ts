interface Produto {
    nome: string;
    preco: number;
  }


  const produtos: Produto[] = [
    { nome: 'Teclado', preco: 10 },
    { nome: 'Lápis', preco: 20 },
    { nome: 'Caneta', preco: 30 },
    { nome: 'Borracha', preco: 40 },
    { nome: 'Tenis', preco: 50 },
    { nome: 'Meia', preco: 60 },
    { nome: 'Chinelo', preco: 70 },
    { nome: 'Garrafa', preco: 80 },
    { nome: 'Estojo', preco: 90 },
    { nome: 'Bolsa', preco: 100 },
  ];

  function getRandomObjects(array) {
    let result: any = []
    while(result.length < 4) {
        let randomIndex = Math.floor(Math.random() * array.length)
        let randomObject: any = array[randomIndex]
        if(!result.includes(randomObject)) {
            result.push(randomObject)
        }
    }
    return result
}
  