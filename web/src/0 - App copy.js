import React, { useState } from 'react'

// Componente -> bloco isolado de html, css e js, o qual não interfere no restante da aplicação
// Estado -> Informações mantidas pelo componente (imutabilidade)
// Propriedade -> Atributos dos elementos html (id, class, atributo, etc) // Informações que um componente PAI passa para o componente filho

import Header from './Header'

function App() {
  const [cont, setCont] = useState(0)

  function incrementCont() {
    setCont(cont + 1)
  }
  return (
    <>
      <Header title="Título 1" />
      <Header title="Título 2" />
      <Header title="Título 3" />
      <h1>Contador: {cont}</h1>
      <button onClick={incrementCont}>Incrementar</button>
    </>
  )
}

export default App;
