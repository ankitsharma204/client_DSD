import BreadCrumb from "../../Components/BreadCrumb";

function AdminDashboard() {
    return (
        <>
       <BreadCrumb title="Admin" subTitle="Dashboard" /> 

            <section className="about-three">
                <div className="container">
                    <h1>Welcome Admin</h1>
                </div>
            </section>
        </>
    )
}

export default AdminDashboard;