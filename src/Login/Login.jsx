import './Login.css';

export const Login = () =>{
    return(
        <div className='bdy'>
                <div className="loginDiv">
            <nav><h1>login</h1></nav>

                       <div className='contain'> 
                       <div>
                        <input type="name" className="input" />
                        <input type="password" className="input" />
                        <input type="email" className="input" />
                        <input type="number" className="input" />
                        <button className="sumbit">Sumbit</button>
                        </div>
                        </div>
                </div>
        </div>
    )
}