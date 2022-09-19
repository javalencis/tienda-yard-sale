import iconEmail from '../assets/icons/email.svg'
import logo from '../assets/logos/logo_yard_sale.svg'
import '../styles/RecoveryPassword.scss'


export const RecoveryPassword = () => {
    return (
        <div className="login">
            <div className="form-container ji">
                <img src={logo} alt="logo" className="logo" />

                <h1 className="title">Email has been sent!</h1>
                <p className="subtitle">Please check your inbox for instructions on how to reset the password</p>

                <div className="email-image">
                    <img src={iconEmail} alt="email" />
                </div>

                <button className="primary-button login-button">Login</button>

                <p className="resend">
                    <span>Didn't receive the email?</span>
                    <a href="/">Resend</a>
                </p>
            </div>
        </div>
    )
}
