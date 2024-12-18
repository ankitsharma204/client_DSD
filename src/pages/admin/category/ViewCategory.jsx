import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";
import { Server_URL2 } from "../../../utils/config";

const ViewCategory = () => {
    const [admin, setAdmin] = useState([]);

    const Navigate = useNavigate();

    async function ViewCategory() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);


            const url = Server_URL + "AddCategory";
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
        ViewCategory();
    }, [])

    async function DeleteCategory(_id) {
        try {
            const url = Server_URL + "AddCategory/" + _id;
            const response = await axios.delete(url);
            console.log(response.data)

            const { error, message } = response.data;
            if (error) {
                alert(message)
            } else {
                alert(message);
                ViewCategory();
            }
        } catch (e) {
            alert(message)
        }
    }

    async function EditCategory(id) {

        Navigate('/admin/edit-category', { state: { id } })
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
                                <th>Photo</th>
                                <th></th>
                                <th>CategoryName</th>
                                <th>Description</th>
                            </tr>
                        </thead>
                        <tbody>

                            {admin.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <button type="button" onClick={() => DeleteCategory(value._id)} className="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                        <td>
                                            <img src={`${Server_URL2}${value.photo}`} alt="name"
                                                style={{ width: '100px', height: 'auto', borderRadius: '5px' }} />
                                        </td>
                                        <td>
                                            <button type="button" onClick={() => EditCategory(value._id)} className="btn btn-danger btn-sm">Edit</button>
                                        </td>
                                        <td>{value.name}</td>
                                        <td>{value.description}</td>
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

export default ViewCategory;