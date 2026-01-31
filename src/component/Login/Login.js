import { useState } from "react";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";



function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Username: ${username}\nPassword: ${password}`);
    };

    const user = {
        username: "Shidiq",
        password: "shidiq123"
    }

    const admin = {
        username: "Admin",
        password: "admin123"
    }

    function LoginUser(e) {
        e.preventDefault();

        if (!username || !password) {
            alert("Lo paham ga sih, itu tu harus diisi woy!");
        }
        if (username === user.username && password === user.password) {
            alert("Login Berhasil!");
            navigate("/user");
        }
        else if (username === admin.username && password === admin.password) {
            alert("Login Berhasil!");
            navigate("/admin");
        } else {
            alert("Account Invalid");
        }
    }

    return (
        <div className={style.login_container}>
            <h1 className={style.title}>War<span style={{ fontSize: "7rem", color: "#ffff3f" }}>Skuy</span></h1>
            <div className={style.login_card}>
                <h1 className={style.login_title}>Welcome to War<span style={{ color: "#7c3aed" }}>Skuy</span></h1>
                <p className={style.login_subtitle}>Silakan login untuk melanjutkan</p>


                <form onSubmit={handleSubmit} className={style.login_form}>
                    <div className={style.form_group}>
                        <label>Username</label>
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Masukkan username"
                            required
                        />
                    </div>


                    <div className={style.form_group}>
                        <label>Password</label>
                        <div className={style.password_wrapper}>
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Masukkan password"
                                required
                            />
                            <span
                                className={style.toggle_password}
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"}
                            </span>
                        </div>
                    </div>


                    <button type="submit" className={style.login_button} onClick={LoginUser}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;