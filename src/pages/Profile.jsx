import {useEffect, useState} from "react";
import http from "../configs/httpConfig.js";
import {Button, Col, Form, Row, Spinner} from "react-bootstrap";
import {Link} from "react-router-dom";
import {FaChevronRight} from "react-icons/fa6";

export default function Profile() {
    const [userProfile, setUserProfile] = useState({});
    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        email: '', name: ''
    });
    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        });
    }

    const fetchUserProfile = () => {
        setLoading(true);
        http.get('/auth/profile')
            .then(response => {
                setUserProfile(response.data);
            })
            .catch(error => {
                console.log(error);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (<div>
        <h4 className="my-4">My Profile</h4>
        {loading && <div className="d-flex justify-content-center text-primary align-items-center gap-2 my-4">
            <Spinner size="lg" variant="primary"/>
            Please wait ...
        </div>}
        {!loading && userProfile &&
            <Row>
                <Col md={8} xl={6}>
                    <div className="card card-body  px-4">
                        <Row className="mb-4">
                            <Col md={6}>
                                Name:
                            </Col>
                            <Col md={6}>
                                {userProfile.name}
                            </Col>
                        </Row>
                        <Row className="mb-4">
                            <Col md={6}>
                                Email:
                            </Col>
                            <Col md={6}>
                                {userProfile.email}
                            </Col>
                        </Row>

                        <div className="mb-4">
                            <Link to="/edit-profile" className="btn btn-primary btn-sm">
                                Edit Profile
                                <FaChevronRight/>
                            </Link>
                        </div>
                    </div>
                </Col>
            </Row>

        }
    </div>)
}