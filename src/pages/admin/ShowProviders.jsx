import axios from "axios";
import { useEffect, useState } from "react";
import { Server_URL } from "../../utils/config";
import BreadCrumb from "../../Components/BreadCrumb";
import { utilityFuntions } from "../../utils/module";
import { useNavigate } from "react-router-dom";

const ShowProviders = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(false);

    const Navigate = useNavigate();

    async function ReadProviders() {
        try {
            // console.log(data)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
    

            const url = Server_URL + "ReadProviders";
            const response = await axios.get(url, {
                headers: {
                    Authorization: token ? `Bearer ${token}` : ""
                }
            });

            console.log(response.data);
            const { error, message } = response.data;
            // console.log(error, message,result);
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
                setProviders(result)
                // alert(message);
            }
        } catch (e) {
            console.log(e.message);
        }

    }
    useEffect(() => {
        ReadProviders();
    }, [])

    async function DeleteProviders(_id) {
        try {
            console.log("id="+_id)
            const token = utilityFuntions.getCookieValue('adminAuthToken');
            console.log(token);
            const url = Server_URL + "DeleteProviders/" + _id;
            const response = await axios.delete(url,{
                headers: {
                    Authorization: token? `Bearer ${token}` : ""
                }
            });
            console.log(response.data)

            const { error, message } = response.data;
            if (error && message === "Please SignIn First!!") {
                // Navigate("/signin");
                alert(message);
            }
           else if (error) {
                alert(message)
            } else {
                alert(message);
                ReadProviders();
            }
        } catch (e) {
            alert(message)
        }
    }


    async function setStatus(id,status) {
        try {
            const token = utilityFuntions.getCookieValue('adminAuthToken');
          setLoading(true);
          console.log(status);
          const newStatus = status === "active" ? "inactive" : "active"
          console.log(newStatus);
          const url = Server_URL + "provider-status/" + id;
          const response = await axios.put(url,{status:newStatus}
            ,{
              headers:{
                  Authorization:token ? `Bearer ${token}` : ""
              }
          }
          )       
          const { error, message } = response.data;
          // console.log(response.data);   
          if (error && message === "Please SignIn First!!") {
            // navigate("/admin-login")
          }
          else if(error) {
            alert(message);
          } else {
            alert(message);   
            setProviders((prev) => 
              prev.map((x) => 
                x._id === id ? {...x ,status: newStatus} : x          
              )
            ) 
            ReadProviders();    
          }  
        } catch (error) {
           alert(message);
        }    finally {
          setLoading(false);
        }
      }
    
    



    return (
        <>
            <BreadCrumb title="Provider" subTitle="Edit Provider" />

            <section className="about-three">
                <div className="container">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Fullname</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Address</th>
                                <th>City</th>
                                <th>Provider's Status</th>
                            </tr>
                        </thead>
                        <tbody>

                            {providers.map((value, index) => {
                                return (
                                    <tr key={index}>
                                        <td>
                                            <button onClick={() => DeleteProviders(value._id)} className="btn btn-danger btn-sm">DELETE</button>
                                        </td>
                                        <td>{value.fullname}</td>
                                        <td>{value.email}</td>
                                        <td>{value.mobile}</td>
                                        <td>{value.address}</td>
                                        <td>{value.city}</td>
                                        <td>
                        {
                          <button
                          type="button"
                          onClick={() => setStatus(value._id,value.status)}
                          className="btn btn-outline-danger btn-sm me-5"
                          disabled = {loading}
                        >
                          {
                            loading
                            ? "updating..."
                            :value.status === "inactive"
                            ? "Activate"
                            : "Deactivate"
                          }
                        </button>
                        }
                        </td>
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

export default ShowProviders;