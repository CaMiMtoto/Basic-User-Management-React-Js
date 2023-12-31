import {useState} from "react";
import {Alert, Spinner} from "react-bootstrap";
import http from "../configs/httpConfig.js";
import {Link, useNavigate} from "react-router-dom";

function Register() {
    const [formData, setFormData] = useState({
        name: '', email: '', password: '', password_confirmation: ''
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        if (formData.password.trim() !== formData.password_confirmation.trim()) {
            setError('Password confirmation does not match');
            return;
        }

        http.post('/auth/register', {
            name: formData.name, email: formData.email, password: formData.password
        })
            .then((response) => {
                const jwt = response.data.token;
                localStorage.setItem('token', jwt);
                localStorage.setItem('user', JSON.stringify({
                    id: response.data.user._id,
                    name: response.data.user.name,
                    email: response.data.user.email
                }));
                navigate('/')
            })
            .catch((error) => {
                setLoading(false);
                setError(error.response.data.error ?? 'Something went wrong');
            });
    }

    return (<div className="card card-body py-5 px-4">
        <div className="">
            <h2>
                Register
            </h2>
            <p>
                Please fill in your credentials to create an account
            </p>
        </div>

        {error && <Alert variant="danger" dismissible={false} className="rounded-1">{error}</Alert>}

        <form onSubmit={handleSubmit} autoComplete="off">

            <div className="mb-4">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" className="form-control" name="name" onChange={handleChange}
                       required={true}/>
            </div>


            <div className="mb-4">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" className="form-control" name="email" onChange={handleChange}
                       required={true}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" className="form-control" name="password" required={true}
                       minLength={4}
                       onChange={handleChange}/>
            </div>
            <div className="mb-4">
                <label htmlFor="password_confirmation">
                    Password Confirmation
                </label>
                <input type="password" id="password_confirmation" className="form-control" name="password_confirmation"
                       required={true}
                       onChange={handleChange}/>
            </div>
            <button className="btn btn-primary d-inline-flex justify-content-center align-items-center gap-2 w-100"
                    disabled={loading}>
                Register
                {loading && <Spinner animation="border" size="sm"/>}
            </button>

            <p className="mt-4 text-center">
                Already have an account? <Link to={'/auth/login'}>Login</Link>
            </p>
        </form>
    </div>);
}

export default Register;