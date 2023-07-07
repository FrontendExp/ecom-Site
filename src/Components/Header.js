import User from "../User"
const Head = () => {

    const handleLogout =(e)=>{
        e.preventDefault()

        localStorage.clear(User)
        
    }

    return (

        <div className="container-fluid">
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <a href='#'><img style={{ height: '30px', width: '100px',marginLeft:'12em' }} src='../image/Logo new.png'></img>
                
                </a>
                <form style={{width:'600px'}} className="d-flex" role="search">
               <input  className="form-control me-5 " type="search" placeholder="Search" aria-label="Search"></input>

                   
                </form>
                <li style={{ listStyle: 'none',color:'white' }} className="nav-item">
                    <a className="nav-link" href="#">Become a Seller</a>
                </li>
                <li style={{listStyle:'none' , color:'white'}} className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        More
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Notification Preferences</a></li>
                        <li><a className="dropdown-item" href="#">24X7 Customer Care</a></li>
                        <li><a className="dropdown-item" href="#">Advertise</a></li>
                        <li><hr className="dropdown-divider"/></li>
                        <li><a className="dropdown-item" href="#">Download App</a></li>
                    </ul>
                </li>
                <li style={{ listStyle: 'none',color:'white' }} className="nav-item">
                    <a className="nav-link" href="#">Cart</a>
                </li>
                <button onClick={(e)=> handleLogout(e)}
                    className="btn btn-danger btn-outline-white me-2" type="submit">Logout</button>

                
            </nav>


        </div>
    )



}





export default Head;
