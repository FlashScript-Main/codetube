import { Navbar } from "./components"
import MainRoutes from "./routes/MainRoutes"

const App = () => {
    // 1️⃣ 👉🏻 img ➡ loading="lazy"
    // 2️⃣ 👉🏻 spinner
    // 3️⃣ 👉🏻 remove "useYouTubeChannel.tsx"
    // 4️⃣ 👉🏻 framer-motion
    // 5️⃣ 👉🏻 PWA
    return (
        <div className={`bg-body-bg-light text-main-text-h1-light dark:bg-body-bg-dark dark:text-main-text-h1-dark`}>
            <Navbar />

            <MainRoutes />
        </div>
    )

}

export default App