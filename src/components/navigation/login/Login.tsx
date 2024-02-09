import "./Login.scss";
import Logo from "../../../icons/Logo";
import { AiOutlineClose } from "react-icons/ai";
import { Dispatch, FormEvent, useState } from "react";
import { motion } from "framer-motion";
import api from "../../../helpers/url";
import storage from "../../../helpers/storageHelper";

interface Props {
  setLoginOpen: Dispatch<React.SetStateAction<boolean>>;
}

export default function Login({ setLoginOpen }: Props) {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleSUbmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = { email, password };
    let response = await fetch(`${api}/auth/authenticate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      response = await response.json();
      let responseData = response as any;
      const { token, user } = responseData;
      sessionStorage.setItem(storage.token, token);
      sessionStorage.setItem(storage.user, JSON.stringify(user));
    }
  };

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
        <form onSubmit={handleSUbmit}>
          <div className="input">
            <label htmlFor="email-input">Email</label>
            <input
              autoComplete="off"
              type="email"
              name="email"
              id="email-input"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="input">
            <label htmlFor="password-input">Mot de passe</label>
            <input
              autoComplete="off"
              type="password"
              name="password"
              id="password-input"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
          </div>
          <input type="submit" className="btn" value={"Connexion"} />
        </form>
      </div>
    </motion.div>
  );
}
