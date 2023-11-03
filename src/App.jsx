import { BrowserRouter, Route, Routes } from "react-router-dom"
import { GlobalStyle } from "./GlobalStyle"
import { Home } from "./pages/Home/Index"
import { Sobre } from "./pages/Sobre/Index"
import { Cursos } from "./pages/Cursos/Index"
import { Skills } from "./pages/Skills/Index"
import { Projetos } from "./pages/Projetos/Index"
import { Contato } from "./pages/Contato/Index"
import { Page404 } from "./pages/Page404/Index"
import { Menu } from "./components/Menu"


function App() {
  
  return (
    <>
    <GlobalStyle/>
    
    <BrowserRouter>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="sobre" element={<Sobre/>}/>
        <Route path="cursos" element={<Cursos/>}/>
        <Route path="skills" element={<Skills/>}/>
        <Route path="projetos" element={<Projetos/>}/>
        <Route path="contato" element={<Contato/>}/>
        <Route path="*" element={<Page404/>}/>
      </Routes>    
    </BrowserRouter>
    </>
  )
}

export default App
