import { GithubAuthProvider, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../firebase.init';
import toast, { Toaster } from 'react-hot-toast';

const LoginProvider = new GoogleAuthProvider();
const notify = () => toast('Logged Out!');
const notifyIn = () => toast('Logged In!');
const notifyEr = () => toast('Error While Working...!');
const GitHubLoginProvider = new GithubAuthProvider();

const Header = () => {
    
    const [ImageURL, setImageURL] = useState(null);
    const [log, setLog] = useState(false);
    const [userInfo, setUserInfo] = useState([]);
    const [showDashboard, setShowDashboard] = useState(false);
    const [showBtn, setShowBtn] = useState(false);
    // const [ImageURL, setImageURL] = useState(() => localStorage.getItem("image") || null);
    // const [log, setLog] = useState(() => JSON.parse(localStorage.getItem("log")) || false);
    // const [userInfo, setUserInfo] = useState(() => JSON.parse(localStorage.getItem("user")) || []);
    // const [showDashboard, setShowDashboard] = useState(() => JSON.parse(localStorage.getItem("dashInfo")) || false);
    // const [showBtn, setShowBtn] = useState(() => JSON.parse(localStorage.getItem("btnInfo")) || false);

    // // localStorage.setItem("log", log);
    // // localStorage.setItem("image", ImageURL);
    // // localStorage.setItem("user", JSON.stringify(userInfo));
    // // localStorage.setItem("dashInfo", JSON.stringify(showDashboard));
    // // localStorage.setItem("btnInfo", JSON.stringify(showBtn));
    // useEffect(() => { localStorage.setItem("image", ImageURL); }, [ImageURL]);
    // useEffect(() => { localStorage.setItem("log", JSON.stringify(log)); }, [log]);
    // useEffect(() => { localStorage.setItem("user", JSON.stringify(userInfo)); }, [userInfo]);
    // useEffect(() => { localStorage.setItem("dashInfo", JSON.stringify(showDashboard)); }, [showDashboard]);
    // useEffect(() => { localStorage.setItem("btnInfo", JSON.stringify(showBtn)); }, [showBtn]);


    const LoginWithGoogle = () => {
        setShowBtn(false);
        signInWithPopup(auth, LoginProvider)
        .then(res => {
            console.log(res.user);
            setImageURL(res.user.photoURL);
            setUserInfo(res.user);
            notifyIn();
            setLog(true);
        })
        .catch(er => {
            console.log(er);
            notifyEr();
        })
    }
    const LoginWithGitHub = () => {
        setShowBtn(false);
        signInWithPopup(auth, GitHubLoginProvider)
        .then((res) => {
            console.log(res.user);
            setImageURL(res.user.photoURL);
            setUserInfo(res.user);
            notifyIn();
            setLog(true);
        })
        .catch(er => {
            console.log(er);
            notifyEr();
        })
    }
    const LogOutWithGoogle = () => {
        setImageURL(null);
        signOut(auth).then((res) => {
            console.log("Logged Out", res);
        }).catch(() => {
            notifyEr();
        })
        notify();
        localStorage.removeItem("log");
        localStorage.removeItem("image");
        localStorage.removeItem("user");
        localStorage.removeItem("dashInfo");
        localStorage.removeItem("btnInfo");
          // reset state
        setLog(false);
        setImageURL(null);
        setUserInfo([]);
        setShowDashboard(false);
        setShowBtn(false);    
   }

    return (
        <div className='sticky top-0'>
            <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Firebase App</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    { ImageURL === null && (<button className='btn' onClick={() => {
        setShowBtn(!showBtn);
    }}>Login</button>)
    }
    {showBtn && !log && (
      <div className="flex flex-col justify-end items-end p-3 ml-1 absolute top-16 rounded-b-xl right-2 bg-amber-100 z-50">
        <button className="btn mb-2" onClick={LoginWithGoogle}>
          With Google
        </button>
        <button className="btn" onClick={LoginWithGitHub}>With GitHub</button>
      </div>
    )}
    {ImageURL && (
    <div onClick={() => setShowDashboard(!showDashboard)} className="w-10 h-10 rounded-full overflow-hidden ml-2">
      <img src={ImageURL} alt="User" />
      {
        showDashboard && log && (
        <div className="fixed inset-0 flex justify-center items-center bg-transparent z-50">
                <div className="flex flex-col justify-center items-center p-6 bg-white shadow-lg rounded-lg w-[300px] h-100 lg:w-[900px]">
                    {/* <p  className='text-right'>X</p> */}
                    <div className='flex flex-col justify-center items-center'>
                        <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
                    <p>{userInfo.displayName}</p>
                    <p>{userInfo.email}</p>
                    <p>{userInfo.lastSignInTime}</p> <br /> 
                    {/* <p>{userInfo.displayName}</p> */}
                    <div className='flex justify-between items-center gap-10'>
                                            <button className='btn' onClick={LogOutWithGoogle}>Logout</button>
                    <button className='btn' onClick={() => setShowDashboard(!showDashboard)}>Close</button>
                    </div>
                    </div>
            </div>
        </div>
        )
      }
    </div>
  )}
  </div>
</div>
        <Toaster position="bottom-right"
  reverseOrder={false} />
        </div>
    );
};

export default Header;