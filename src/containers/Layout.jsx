const Layout =({children}) =>{
    return(
        <>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
            <ToolBar/>
            <Sides/>
            <Backdrop/>
        </div>
        <main>{children}</main>
        </>
    )
}

export default Layout;