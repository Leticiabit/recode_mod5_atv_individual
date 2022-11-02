import { Route, Routes, Link } from "react-router-dom"
import { Home } from "./Home"
import { BookList } from "./BookList"
import './css/styles.css'

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </>
  )
}

export default App