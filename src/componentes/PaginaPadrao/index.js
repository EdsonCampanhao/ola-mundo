import Banner from "componentes/Banner"
import { Children } from "react"
import { Outlet } from "react-router-dom"

const PaginaPadrao = () => {
    return (
        <main>
            <Banner></Banner>
            <Outlet/>
        </main>
    )
}

export default PaginaPadrao