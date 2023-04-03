import "../../styles/Homepage.css"

import { Link } from "react-router-dom"

import TwitterIcon from "@mui/icons-material/Twitter"

function Register() {
  return (
    <div className="container">
        <TwitterIcon className="icon"/>

        <h2>Rejoignez Twitter</h2>

        <button className="google">
            <img src="../../image/google.png" alt=""/>
            S'inscrire avec Google
        </button>

        <button className="apple">
            <img src="../../images/apple.png" alt=""/>
            S'inscrire avec Apple
        </button>

        <p>ou</p>

        <button>Créer un compte</button>

        <p className="policy">En vous inscrivant, vous acceptez les Conditions d'utilisation et la Politique de confidentialité, notamment l'Utilisation des cookies.</p>

        <p className="account">Vous avez déjà un compte ? <Link to="/">Connectez-vous.</Link></p>
    </div>
  )
}

export default Register