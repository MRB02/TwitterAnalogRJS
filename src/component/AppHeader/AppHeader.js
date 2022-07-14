const AppHeader=({Posts, Liked})=>{
    return(

        <div className="app-header d-flex justify-content-between align-items-center">
        <h1>Muzaffar Boymirzayev</h1>
        <h2>{Posts} Posts, like {Liked}</h2>
        </div>
    )
}

export default AppHeader;