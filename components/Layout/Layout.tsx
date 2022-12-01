import Line from "../line/line"
import Nav from "../Nav/Nav"
function Layout({ children }: any) {

    return (
        <>
            <Nav />
            <Line />
            <main>{children}
            </main>
        </>

    )
}


export default Layout
/*  <Line />*/