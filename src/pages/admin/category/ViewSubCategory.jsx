import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../../utils/config";
import BreadCrumb from "../../../Components/BreadCrumb";
import { utilityFuntions } from "../../../utils/module";
import { useNavigate } from "react-router-dom";
import { Server_URL2 } from "../../../utils/config";

const ViewSubCategory = () => {
    const [admin, setAdmin] = useState([]);

    const Navigate = useNavigate();

    async function ViewSubCategory() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            // console.log(token);
    

            const url = Server_URL + "AddSubCategory";
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
                console.log(result)
                setAdmin(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        ViewSubCategory();
    }, [])

    async function DeleteCategory(_id) {
        try {
            const url = Server_URL + "AddSubCategory/" + _id;
            const response = await axios.delete(url);
            // console.log(response.data)

            const { error, message } = response.data;
            if (error) {
                alert(message)
            } else {
                alert(message);
                ViewSubCategory();
            }
        } catch (e) {
            alert(message)
        }
    }

    async function EditCategory(id) {

        Navigate('/admin/edit-subcategory', { state: { id } })
      }

    return (
        <>
            <BreadCrumb title="SubCategory" subTitle="View SubCategory" />

            <section className="about-three">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th></th>
                                <th></th>
                                <th>SubCategoryName</th>
                                <th>Specifics</th>
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
                                        <td>{value.subcategory}</td>
                                        <td>{value.categoryInfo}</td>
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

export default ViewSubCategory;