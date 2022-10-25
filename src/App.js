import { BrowserRouter, Routes, Route } from "react-router-dom";
import {QueryClient, QueryClientProvider} from "react-query";
// import {Home, , Post} from "./page";
import 'antd/dist/antd.css';
import {Home, LoginPage, Post, RegisterPage } from "./page";
import Profile from "./page/Profile"
import { Toaster } from 'react-hot-toast';


function App() {

  const queryClient = new QueryClient();
  return (
    <>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/post" element={<Post/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
        <Toaster />
      </BrowserRouter>
    </QueryClientProvider>
    </>
  );
}

export default App;
