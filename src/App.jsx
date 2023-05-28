import { createContext, useState, useEffect } from "react";
import Login from "./component/Login";
import ContentPost from "./component/ContentPost";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const DataContext = createContext();
function App() {
  const [dataLogin, setDataLogin] = useState({});
  const dataItem = (data) => {
    setDataLogin( data );
  };
  return (
    <div>
      <DataContext.Provider value={dataLogin}>
        <BrowserRouter>
          <Routes>
            <Route index path="/" element={<Login dataItem={dataItem} />} />
            <Route path="/content" element={<ContentPost dataLogin={dataLogin} />} />
          </Routes>
        </BrowserRouter>
      </DataContext.Provider>
    </div>
  );
}

export default App;
