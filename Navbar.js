/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/style-prop-object */
/* eslint-disable no-unused-vars */

function Navbar() {
    return (
        <>

           <div className="navbar">
           <div className="navi">
                <img src="./logo.png" alt="" />
                <div className="dro">
                    
                    <div class="dropdown">
            <svg viewBox="0 0 24 24" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" fill="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><defs><style>.cls-1</style></defs><line class="cls-1" x1="0.5" y1="3.35" x2="12" y2="3.35"></line><line class="cls-1" x1="6.25" y1="0.48" x2="6.25" y2="3.35"></line><path class="cls-1" d="M9.12,3.35c0,3.52-3.28,8.2-7.66,10.55"></path><path class="cls-1" d="M4.51,7.37A16.4,16.4,0,0,0,11,13.9"></path><polyline class="cls-1" points="12.96 22.52 16.79 11.98 17.75 11.98 21.58 22.52"></polyline><line class="cls-1" x1="20.43" y1="18.69" x2="15.07" y2="18.69"></line><line class="cls-1" x1="11.04" y1="22.52" x2="14.88" y2="22.52"></line><line class="cls-1" x1="19.67" y1="22.52" x2="23.5" y2="22.52"></line></g></svg>
            <button class="btn btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">English</button>
            <ul class="dropdown-menu">
                <li class="dropdown-item">English</li>
                <li class="dropdown-item">Hindi</li>
            </ul> 
             </div>
                  
                    <div className="sign">
                    <button><a href="#">Sign in</a></button>
                    </div>
                    

                </div>
            </div>
           </div>
        </>

    )
}

export default Navbar;