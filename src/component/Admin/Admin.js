import { useNavigate } from "react-router-dom";
import style from "./Admin.module.css";

function Admin() {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    };

    return (
        <div className={style.container}>
            <div className={style.title}>
                <h1 style={{ color: "#ffffff", fontSize: "5rem", fontweight: "bold" }}>War<span style={{ fontSize: "7rem", color: "#ffff3f" }}>Skuy</span></h1>
            </div>
            <header className={style.header}>
                <h1>Dashboard Admin</h1>
                <button className={style.logout_btn} onClick={handleLogout}>Logout</button>
            </header>


            <div className={style.content}>
                <div className={style.card}>
                    <h2>Manajemen User</h2>
                    <p>Kelola data user, status, dan hak akses.</p>
                </div>


                <div className={style.card}>
                    <h2>Statistik</h2>
                    <p>Lihat ringkasan aktivitas dan data sistem.</p>
                </div>


                <div className={style.card}>
                    <h2>Pengaturan</h2>
                    <p>Konfigurasi aplikasi dan sistem keamanan.</p>
                </div>
            </div>
        </div>
    )
}

export default Admin;