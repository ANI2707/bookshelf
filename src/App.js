import { Route, Routes } from "react-router-dom";
import CardContainer from "./components/CardContainer";
import Navbar from "./components/Navbar";
import Search from "./components/Search";
import MyBooks from "./components/MyBooks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search />
              <CardContainer />
            </>
          }
        />
        <Route path="/mybookshelf" element={<MyBooks />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
