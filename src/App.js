import { BrowserRouter, Routes, Route } from "react-router-dom";

import  PrivateLayout from "./layouts/PrivateLayout"
import {QueryClient, QueryClientProvider} from "react-query";
import {Home, LoginPage, RegisterPage} from "./page";



function App() {
  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          {/* <PrivateLayout/> */}
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
    </>
  );
}

export default App;
