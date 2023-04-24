
import {
    MemoryRouter,
    Routes,
    Route,
} from "react-router-dom";
import Chat from './chat'
import './style.scss'
function Pages() {
    return (
        <MemoryRouter>
            <Routes>
                <Route path="" element={<Chat />} />
            </Routes>
        </MemoryRouter>

    );
}

export default Pages
