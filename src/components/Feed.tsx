import Sidebar from "./Sidebar"
import Videos from "./Videos"

const Feed = () => {

    return (
        <main className="flex flex-col md:flex-row">
            <aside className="h-auto md:h-[92vh] border-r border-r-[#3d3d3d] px-0 md:px-8">
                <Sidebar />

                <h5 className="copyright mt-6 text-white">
                    Copyright 2024 FlashScript
                </h5>
            </aside>

            <section className="p-4 overflow-y-auto h-[90vh] flex-1">
                <h1 className="text-4xl font-bold mb-4 text-white">
                    VS Code {" "}
                    <span className="text-[#FC1503]">
                        vidoes
                    </span>
                </h1>

                <Videos />
            </section>
        </main>
    )

}

export default Feed