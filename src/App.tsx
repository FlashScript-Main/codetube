import { Navbar } from "./components"
import MainRoutes from "./routes/MainRoutes"

const App = () => {

    return (
        <div className="bg-black text-white">
            <Navbar />

            <MainRoutes />
        </div>
    )

}

export default App