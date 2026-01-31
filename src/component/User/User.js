import { useNavigate } from "react-router-dom";
import style from "./User.module.css";

function User() {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1 style={{ color: "#ffffff", fontSize: "5rem", fontweight: "bold" }}>War<span style={{ fontSize: "7rem", color: "#ffff3f" }}>Skuy</span></h1>
            </div>
            <header className={style.header}>
                <h1>Dashboard User</h1>
                <button className={style.logout_btn} onClick={handleLogout}>Logout</button>
            </header>


            <div className={style.content}>
                <div className={style.card}>
                    <h2>Profil</h2>
                    <p><strong>Nama :</strong> Muhammad Miftahusshiddiq</p>
                    <p><strong>Status :</strong> Aktif</p>
                </div>


                <div className={style.card}>
                    <h2>Informasi</h2>
                    <p>Selamat datang di halaman user. made website by developer</p>
                </div>
            </div>
        </div >
    )
}

export default User;