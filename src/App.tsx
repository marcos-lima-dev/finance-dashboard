import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Dashboard from "./pages/Dashboard";
import UploadPage from "./pages/UploadPage";

function App() {
    return (
        <Router>
            <Layout>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/upload" element={<UploadPage />} />
                </Routes>
            </Layout>
        </Router>
    );
}

export default App;
