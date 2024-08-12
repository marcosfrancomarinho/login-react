import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Button from "./components/utils/Button/Button";

export default function App(): JSX.Element {
    return (
        <>
            <BrowserRouter>
                <Header />
                <Main />
                <Footer />
            </BrowserRouter>
        </>
    )
}