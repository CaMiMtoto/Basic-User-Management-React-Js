import {useNavigate} from "react-router-dom";

export default function Home() {
    let navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user)
        navigate('/auth/login');
    return (
        <div>
            <h4>
                Welcome back, {user.name} !
            </h4>
        </div>
    )
}