import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";

const ViewState = () => {
    const [admin, setAdmin] = useState([]);

    const Navigate = useNavigate();

    async function View() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
    

            const url = Server_URL + "viewState";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });

            const { error, message } = response.data;
            // console.log(error, message,result);
            // console.log(response.data);
             if (error) {
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
        View();
    }, [])

    async function DeleteState(_id) {
        try {
            const url = Server_URL + "Deletestate/" + _id;
            const response = await axios.delete(url);
            console.log(response.data)

            const { error, message } = response.data;
            if (error) {
                alert(message)
            } else {
                alert(message);
                View();
            }
        } catch (e) {
            alert(message)
        }
    }

    return (
        <>
            <BreadCrumb title="State" subTitle="View State" />

            <section className="about-three">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>StateName</th>
                            </tr>
                        </thead>
                        <tbody>

                            {admin.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <button type="button" onClick={() => DeleteState(value._id)} className="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                        <td>{value.name}</td>
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

export default ViewState;