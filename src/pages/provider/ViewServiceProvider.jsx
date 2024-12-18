import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { utilityFuntions } from "../../utils/module";
import { useNavigate } from "react-router-dom";

const ViewServiceProvider = () => {
    const [provider, setProvider] = useState([]);

    const Navigate = useNavigate();

    async function ReadProvider() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('providerAuthToken');
            // console.log(token);
    

            const url = Server_URL + "ReadProvider";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });
            console.log(response.data)
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
                console.log(result)
                setProvider(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        ReadProvider();
    }, [])

    async function DeleteProvider(_id) {
        try {
            const url = Server_URL + "DeleteProvider/" + _id;
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

    async function EditCategory(id) {

        Navigate('/provider/update-provider', { state: { id } })
      }

    return (
        <>
            <BreadCrumb title="Provider" subTitle="Providers Profile" />

            <section className="about-three">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th>Delete</th>
                                <th>Edit</th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>State</th>
                                <th>Category</th>
                                <th>Sub-Category</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>

                            {provider.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteProvider(value._id)} className="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                        <td>
                                            <button type="button" onClick={() => EditCategory(value._id)} className="btn btn-danger btn-sm">Edit</button>
                                        </td>
                                        <td>{value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.address}</td>
                                        <td>{value.cityInfo}</td>
                                        <td>{value.stateInfo}</td>
                                        <td>{value.categoryInfo}</td>
                                        <td>{value.subcategoryInfo}</td>
                                        <td>{value.SlotAmount}</td>
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

export default ViewServiceProvider;