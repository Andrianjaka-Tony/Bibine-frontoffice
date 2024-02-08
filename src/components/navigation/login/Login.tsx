import "./Login.scss";
import Logo from "../../../icons/Logo";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch } from "react";
import { motion } from "framer-motion";

interface Props {
  setLoginOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setLoginOpen }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="login"
    >
      <div className="container">
        <AiOutlineClose
          onClick={() => {
            setLoginOpen(false);
          }}
          className="close"
        />
        <div className="logo-container">
          <Logo className="logo" />
        </div>
        <div className="title">Connexion</div>
        <form>
          <div className="input">
            <label htmlFor="email-input">Email</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email-input"
            />
          </div>
          <div className="input">
            <label htmlFor="password-input">Mot de passe</label>
            <input type="password" name="password" id="password-input" />
          </div>
          <input type="submit" className="btn" value={"Connexion"} />
        </form>
      </div>
    </motion.div>
  );
}
