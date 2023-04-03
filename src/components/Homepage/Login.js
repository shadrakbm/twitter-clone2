import "../../styles/Homepage.css"

import { Link } from "react-router-dom"

import TwitterIcon from "@mui/icons-material/Twitter"

function Login() {
  return (
    <div className="container">
      <TwitterIcon className="icon" />
        
      <h2>Connectez-vous à Twitter</h2>

      <button className="google">
        <img src="../../image/google.png" alt=""/>
        Se connecter avec Google
      </button>

      <button className="apple">
        <img src="../../images/apple.png" alt=""/>
        Se connecter avec Apple
      </button>

      <p>ou</p>

      <input type="text" placeholder="Numéro de téléphone, adresse email ou nom d'utilisateur"/>

      <button>Suivant</button>

      <button>Mot de passe oublié ?</button>

      <p className="account">Vous n'avez pas de compte ? <Link to="/register">Inscrivez-vous.</Link></p>
    </div>
  )
}

export default Login