// Navigation.js
import React, { useState } from 'react';
import Modal from 'react-modal';
import {loginWithEmail, loginGoogle, signupWithEmail, logout} from './data/UserAuth';
import {useNavigate} from 'react-router-dom';

function Navigation() {

  const [visible, setVisible] = useState(false);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const logIn = async () => {

    try {
      await loginWithEmail(loginEmail, loginPassword);
      setVisible(false);
      console.log("User logged in");
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const loginWithGoogle = async () => {

    try {
      await loginGoogle();
      setVisible(false);
      console.log("User logged in");
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logOutFromAccount = async () => {

    try {
      await logout();
      setVisible(false);
      console.log("User logged out");
      setIsLoggedIn(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
    <nav className="fixed-navigation">
      {<svg width="228" height="46" viewBox="0 0 228 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.296 33H7.308V8.16H1.08V7.8H16.56V8.16H10.296V33ZM25.2613 16.548V15.792C24.1813 16.224 23.1973 17.1 22.3093 18.42C21.4213 19.716 20.9533 20.94 20.9053 22.092V33H18.3853V15H20.9053V20.724C21.2893 19.332 22.0213 18.024 23.1013 16.8C24.1813 15.552 25.4053 14.904 26.7733 14.856H26.9173C27.3973 14.856 27.7933 15.024 28.1053 15.36C28.4413 15.672 28.6093 16.068 28.6093 16.548C28.6093 17.028 28.4413 17.424 28.1053 17.736C27.7933 18.048 27.3973 18.204 26.9173 18.204C26.4373 18.204 26.0413 18.048 25.7293 17.736C25.4173 17.424 25.2613 17.028 25.2613 16.548ZM45.101 33C43.469 33 42.353 32.688 41.753 32.064C41.201 31.536 40.925 31.08 40.925 30.696V29.94C39.749 32.076 37.865 33.144 35.273 33.144C32.249 33.144 30.533 31.776 30.125 29.04C30.077 28.752 30.053 28.464 30.053 28.176C30.053 27.864 30.101 27.528 30.197 27.168C30.293 26.808 30.569 26.412 31.025 25.98C31.937 25.116 33.941 24.588 37.037 24.396C37.805 24.324 38.513 24.288 39.161 24.288C39.809 24.288 40.397 24.312 40.925 24.36V18.384C40.877 18.36 40.877 18.252 40.925 18.06C40.973 17.844 40.925 17.58 40.781 17.268C40.661 16.932 40.493 16.608 40.277 16.296C40.061 15.984 39.677 15.72 39.125 15.504C38.573 15.264 37.853 15.144 36.965 15.144C36.077 15.144 35.033 15.312 33.833 15.648C32.657 15.96 31.793 16.272 31.241 16.584L31.097 16.332C33.233 15.348 35.405 14.856 37.613 14.856C40.085 14.856 41.717 15.3 42.509 16.188C43.133 16.884 43.445 17.616 43.445 18.384V30.444C43.445 31.14 43.577 31.68 43.841 32.064C44.129 32.424 44.417 32.616 44.705 32.64L45.101 32.712H46.217V33H45.101ZM35.849 32.856C37.121 32.856 38.261 32.424 39.269 31.56C40.301 30.672 40.853 29.82 40.925 29.004V24.648C40.277 24.6 39.617 24.576 38.945 24.576C38.297 24.576 37.649 24.612 37.001 24.684C35.177 24.9 33.989 25.308 33.437 25.908C32.885 26.508 32.609 27.336 32.609 28.392C32.609 28.584 32.621 28.8 32.645 29.04C32.861 31.584 33.929 32.856 35.849 32.856ZM63.1378 33C62.1538 33 61.3978 32.784 60.8698 32.352C60.3658 31.92 60.1018 31.488 60.0778 31.056L60.0418 30.444V19.14C60.0418 17.244 59.5498 16.032 58.5658 15.504C58.0618 15.264 57.4378 15.144 56.6938 15.144C55.1578 15.144 53.7778 15.756 52.5538 16.98C51.3298 18.18 50.7178 19.26 50.7178 20.22V33H48.1978V15H50.7178V19.104C51.1258 18.072 51.8818 17.112 52.9858 16.224C54.0898 15.312 55.3018 14.856 56.6218 14.856C57.9418 14.856 59.0098 14.988 59.8258 15.252C60.6658 15.492 61.2778 15.84 61.6618 16.296C62.2618 17.04 62.5618 18 62.5618 19.176V30.444C62.5618 31.14 62.6938 31.68 62.9578 32.064C63.2458 32.424 63.5338 32.616 63.8218 32.64L64.2178 32.712H65.3338V33H63.1378ZM66.7955 24.648C66.7955 21.528 67.5515 19.116 69.0635 17.412C70.5755 15.708 72.8435 14.856 75.8675 14.856C77.2835 14.856 78.7115 15.216 80.1515 15.936V15H82.6715V42H80.1515V29.868C79.6955 30.708 78.9395 31.452 77.8835 32.1C76.8275 32.748 75.5795 33.072 74.1395 33.072C69.2435 32.952 66.7955 30.144 66.7955 24.648ZM74.1755 32.784C75.7835 32.784 77.1635 32.352 78.3155 31.488C79.4675 30.624 80.0795 29.772 80.1515 28.932V16.26C78.4475 15.516 76.9835 15.144 75.7595 15.144C73.6235 15.144 72.0155 15.984 70.9355 17.664C69.8555 19.32 69.3155 21.648 69.3155 24.648C69.3155 30.072 70.9355 32.784 74.1755 32.784ZM88.792 28.86C88.792 30.756 89.296 31.968 90.304 32.496C90.784 32.736 91.396 32.856 92.14 32.856C93.652 32.856 94.996 32.28 96.172 31.128C97.372 29.976 98.02 28.908 98.116 27.924V15H100.636V30.444C100.636 31.14 100.768 31.68 101.032 32.064C101.32 32.424 101.608 32.616 101.896 32.64L102.292 32.712H103.408V33H101.212C100.228 33 99.472 32.784 98.944 32.352C98.44 31.92 98.176 31.488 98.152 31.056L98.116 30.444V28.896C97.684 29.928 96.916 30.9 95.812 31.812C94.708 32.7 93.496 33.144 92.176 33.144C90.88 33.144 89.812 33.024 88.972 32.784C88.156 32.52 87.568 32.16 87.208 31.704C86.584 30.96 86.272 30 86.272 28.824V15H88.792V28.86ZM108.893 33C107.909 33 107.153 32.784 106.625 32.352C106.121 31.92 105.857 31.488 105.833 31.056L105.797 30.444V15H108.317V30.444C108.317 31.14 108.449 31.68 108.713 32.064C109.001 32.424 109.277 32.616 109.541 32.64L109.973 32.712H111.089V33H108.893ZM106.013 10.968C105.725 10.68 105.581 10.32 105.581 9.888C105.581 9.456 105.725 9.096 106.013 8.808C106.301 8.496 106.661 8.34 107.093 8.34C107.525 8.34 107.885 8.496 108.173 8.808C108.485 9.096 108.641 9.456 108.641 9.888C108.641 10.32 108.485 10.68 108.173 10.968C107.885 11.256 107.525 11.4 107.093 11.4C106.661 11.4 106.301 11.256 106.013 10.968ZM118.547 33C116.435 33 115.103 32.448 114.551 31.344C114.431 31.104 114.371 30.888 114.371 30.696V6.036H116.891V30.444C116.891 31.14 117.023 31.68 117.287 32.064C117.575 32.424 117.863 32.616 118.151 32.64L118.547 32.712H119.663V33H118.547ZM131.234 33H128.246V8.16H122.018V7.8H137.498V8.16H131.234V33ZM146.199 16.548V15.792C145.119 16.224 144.135 17.1 143.247 18.42C142.359 19.716 141.891 20.94 141.843 22.092V33H139.323V15H141.843V20.724C142.227 19.332 142.959 18.024 144.039 16.8C145.119 15.552 146.343 14.904 147.711 14.856H147.855C148.335 14.856 148.731 15.024 149.043 15.36C149.379 15.672 149.547 16.068 149.547 16.548C149.547 17.028 149.379 17.424 149.043 17.736C148.731 18.048 148.335 18.204 147.855 18.204C147.375 18.204 146.979 18.048 146.667 17.736C146.355 17.424 146.199 17.028 146.199 16.548ZM166.038 33C164.406 33 163.29 32.688 162.69 32.064C162.138 31.536 161.862 31.08 161.862 30.696V29.94C160.686 32.076 158.802 33.144 156.21 33.144C153.186 33.144 151.47 31.776 151.062 29.04C151.014 28.752 150.99 28.464 150.99 28.176C150.99 27.864 151.038 27.528 151.134 27.168C151.23 26.808 151.506 26.412 151.962 25.98C152.874 25.116 154.878 24.588 157.974 24.396C158.742 24.324 159.45 24.288 160.098 24.288C160.746 24.288 161.334 24.312 161.862 24.36V18.384C161.814 18.36 161.814 18.252 161.862 18.06C161.91 17.844 161.862 17.58 161.718 17.268C161.598 16.932 161.43 16.608 161.214 16.296C160.998 15.984 160.614 15.72 160.062 15.504C159.51 15.264 158.79 15.144 157.902 15.144C157.014 15.144 155.97 15.312 154.77 15.648C153.594 15.96 152.73 16.272 152.178 16.584L152.034 16.332C154.17 15.348 156.342 14.856 158.55 14.856C161.022 14.856 162.654 15.3 163.446 16.188C164.07 16.884 164.382 17.616 164.382 18.384V30.444C164.382 31.14 164.514 31.68 164.778 32.064C165.066 32.424 165.354 32.616 165.642 32.64L166.038 32.712H167.154V33H166.038ZM156.786 32.856C158.058 32.856 159.198 32.424 160.206 31.56C161.238 30.672 161.79 29.82 161.862 29.004V24.648C161.214 24.6 160.554 24.576 159.882 24.576C159.234 24.576 158.586 24.612 157.938 24.684C156.114 24.9 154.926 25.308 154.374 25.908C153.822 26.508 153.546 27.336 153.546 28.392C153.546 28.584 153.558 28.8 153.582 29.04C153.798 31.584 154.866 32.856 156.786 32.856ZM181.329 15.216L181.545 15C181.641 15.048 181.761 15.192 181.905 15.432C182.073 15.672 182.169 15.888 182.193 16.08C182.241 16.272 182.265 16.452 182.265 16.62C182.265 17.268 182.121 17.928 181.833 18.6L174.921 33H174.561L167.865 15H170.385L175.893 29.904L181.473 18.6C181.761 18.096 181.905 17.496 181.905 16.8C181.905 16.104 181.713 15.576 181.329 15.216ZM186.701 24.216C186.701 27.192 187.217 29.376 188.249 30.768C189.305 32.16 190.685 32.856 192.389 32.856C194.789 32.856 196.925 32.496 198.797 31.776L198.905 32.028C196.985 32.772 194.813 33.144 192.389 33.144C189.989 33.144 188.033 32.424 186.521 30.984C185.009 29.544 184.253 27.324 184.253 24.324C184.253 21.324 185.045 18.996 186.629 17.34C188.213 15.684 190.229 14.856 192.677 14.856C194.645 14.856 196.301 15.444 197.645 16.62C198.989 17.796 199.661 19.536 199.661 21.84C199.661 21.96 199.661 22.08 199.661 22.2H186.809C186.737 22.848 186.701 23.52 186.701 24.216ZM197.213 21.912C197.189 19.608 196.745 17.904 195.881 16.8C195.017 15.696 193.901 15.144 192.533 15.144C191.165 15.144 189.941 15.744 188.861 16.944C187.805 18.144 187.133 19.8 186.845 21.912H197.213ZM206.789 33C204.677 33 203.345 32.448 202.793 31.344C202.673 31.104 202.613 30.888 202.613 30.696V6.036H205.133V30.444C205.133 31.14 205.265 31.68 205.529 32.064C205.817 32.424 206.105 32.616 206.393 32.64L206.789 32.712H207.905V33H206.789ZM220.78 16.26C220.396 15.948 219.772 15.684 218.908 15.468C218.068 15.252 217.432 15.144 217 15.144C216.568 15.144 216.316 15.144 216.244 15.144C214.948 15.168 214.012 15.504 213.436 16.152C212.86 16.776 212.572 17.484 212.572 18.276C212.572 19.068 212.824 19.74 213.328 20.292C213.832 20.82 214.456 21.24 215.2 21.552C215.968 21.84 216.784 22.176 217.648 22.56C218.536 22.944 219.352 23.34 220.096 23.748C220.864 24.132 221.5 24.708 222.004 25.476C222.508 26.22 222.76 27.156 222.76 28.284C222.76 29.412 222.364 30.372 221.572 31.164C220.78 31.956 219.892 32.484 218.908 32.748C217.948 33.012 216.904 33.144 215.776 33.144C213.328 33.144 211.492 32.604 210.268 31.524L210.484 31.308C210.964 31.764 211.672 32.136 212.608 32.424C213.568 32.712 214.492 32.856 215.38 32.856C216.796 32.856 217.96 32.472 218.872 31.704C219.808 30.912 220.276 29.94 220.276 28.788C220.276 27.612 219.928 26.676 219.232 25.98C218.536 25.26 217.684 24.708 216.676 24.324C215.692 23.916 214.696 23.52 213.688 23.136C212.68 22.728 211.828 22.176 211.132 21.48C210.436 20.76 210.088 19.932 210.088 18.996C210.088 18.06 210.304 17.304 210.736 16.728C211.168 16.128 211.744 15.708 212.464 15.468C213.688 15.06 214.912 14.856 216.136 14.856C218.2 14.856 219.808 15.24 220.96 16.008L220.78 16.26Z" fill="#50614A"/>
<path d="M79.3333 42C79.3333 43.4728 80.5272 44.6667 82 44.6667C83.4728 44.6667 84.6667 43.4728 84.6667 42C84.6667 40.5272 83.4728 39.3333 82 39.3333C80.5272 39.3333 79.3333 40.5272 79.3333 42ZM227.354 42.3536C227.549 42.1583 227.549 41.8417 227.354 41.6464L224.172 38.4645C223.976 38.2692 223.66 38.2692 223.464 38.4645C223.269 38.6597 223.269 38.9763 223.464 39.1716L226.293 42L223.464 44.8284C223.269 45.0237 223.269 45.3403 223.464 45.5355C223.66 45.7308 223.976 45.7308 224.172 45.5355L227.354 42.3536ZM82 42.5H227V41.5H82V42.5Z" fill="#50614A"/>
</svg>
}
      <ul className="nav-links">
        <li><a className="nav-link" href="#">Home</a></li>
        <li><a className="nav-link" href="#">Find offers</a></li>
        <li><a className="nav-link" href="#">Add new offers</a></li>
        <li><a className="nav-link" href="#">My offers</a></li>
        <li><a className="nav-link" href="#">Favourites</a></li>
        <button className="button primary">Sign in</button>
        <button className="button primary" onClick={() => {
              isLoggedIn ? logOutFromAccount() : setVisible(true);
            }}
          >
            {isLoggedIn ? "Log out" : "Log in"}</button>

      </ul>
      <button className="button primary hidden" >Menu</button>
    </nav>

    <Modal 
    isOpen={visible}
      onRequestClose={() => setVisible(false)}
      className="auth-modal"
    >
      <h2>Log in</h2>
      <form onSubmit={logIn}>
        <label>
          Email:
          <input
            type="email"
            value={loginEmail}
            onChange={(e) => setLoginEmail(e.target.value)}
            required
          />
        </label>

        <label>
          Password:
          <input
            type="password"
            value={loginPassword}
            onChange={(e) => setLoginPassword(e.target.value)}
            required
          />
        </label>

        <button type="submit" className="button primary">
          Log in
        </button>

        <button
          onClick={loginWithGoogle}
          className="google-login-button button primary"
        >
          Login with Google
        </button>
      </form>
    </Modal>
    </div>
  );
}

export default Navigation;
