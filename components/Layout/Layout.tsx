import Line from "../line/line"
import Nav from "../Nav/Nav"
function Layout({ children }: any) {

    return (
        <>
            <Nav />
           
            <main>{children}
            </main>
        </>

    )
}


export default Layout
/*  <Line />*/