import { useState, useEffect } from 'react'
import './App.css'

function App() {

  const [produtos, setProdutos] = useState(
    [
      {'id': 1, 'produto': 'ps2', 'valor': 800},
      {'id': 2, 'produto': 'ps3', 'valor': 1200},
      {'id': 3, 'produto': 'ps4', 'valor': 2800},
      {'id': 4, 'produto': 'ps5', 'valor': 2000},
      {'id': 5, 'produto': 'xbox x', 'valor': 3000}
    ]
  )

  const [inputValue, setInputValue] = useState("")

  // const idIgual = produtos.filter(produto => produto.id === inputValue)

  useEffect(function (){
    produtos.data
  }, [inputValue])

  return (
    <>
      <h1>Listando array em um Select</h1>
      <form>

        <select name="" id="">
          <option value="none">Select sem Map</option>
          <option value="1">ps2</option>
          <option value="2">ps3</option>
          <option value="3">ps4</option>
        </select>

        <select name="" id="">
          <option value="">Select com Map</option>
            {produtos.map((produto) => (
              <option value={() => setInputValue(produto.produto)} key={produto.id}>{produto.produto}</option>
            ))}
        </select>

      </form>

      {
        produtos.filter(produto => (produto.produto).includes(inputValue.valueOf)).map((produto) => {
          <p key={produto.id}>Produto Selecionado: {produto.produto}</p>
        })
      }
    </>
  )
}

export default App