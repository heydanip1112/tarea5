import { BrowserRouter, Route, Routes } from "react-router";
import IndexPage from "./pages/IndexPage.jsx";
import FavoritesPage from "./pages/FavoritesPage.jsx";
import Layout from "./layout/Layout.jsx";
import { Notification } from "./components/Notification.jsx";

const App = () => {
    return(
        <BrowserRouter>
            <Notification />
            <Routes>
                <Route element={<Layout />}>
                <Route path="/" element={<IndexPage/>} />
                <Route path="/favoritos" element={<FavoritesPage/>} />

                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App;