import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { utilityFuntions } from "../../utils/module";
import { useNavigate } from "react-router-dom";

const ViewAdmin = () => {
    const [admin, setAdmin] = useState([]);

    const Navigate = useNavigate();

    async function ReadAdmin() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
    

            const url = Server_URL + "AdminRegistration";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });

            const { error, message } = response.data;
            // console.log(error, message,result);
            // console.log(response.data);
            if (error && message === "Please SignIn First!!") {
                Navigate("/signin");
                alert(message);
            }
            else if (error) {
                alert(message);
            }
            else {
                const { result } = response.data
                // console.log(result)
                setAdmin(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        ReadAdmin();
    }, [])

    async function DeleteAdmin(_id) {
        try {
            const url = Server_URL + "AdminRegistration/" + _id;
            const response = await axios.delete(url);
            console.log(response.data)

            const { error, message } = response.data;
            if (error) {
                alert(message)
            } else {
                alert(message);
                ReadAdmin();
            }
        } catch (e) {
            alert(message)
        }
    }

    return (
        <>
            <BreadCrumb title="Admin" subTitle="Add New Admin" />

            <section className="about-three">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Category</th>
                            </tr>
                        </thead>
                        <tbody>

                            {admin.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteAdmin(value._id)} className="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                        <td>{value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.userrole}</td>
                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>
            </section>
        </>
    )
}

export default ViewAdmin;