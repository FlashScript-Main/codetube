import { Navbar } from "./components"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
    
    return (
        <div className={`bg-body-bg-light text-main-text-h1-light dark:bg-body-bg-dark dark:text-main-text-h1-dark`}>
            <Navbar />

            <MainRoutes />
        </div>
    )

}

export default App