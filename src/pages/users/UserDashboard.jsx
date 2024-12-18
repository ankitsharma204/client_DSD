import BreadCrumb from "../../Components/BreadCrumb";

function UserDashboard() {
    return (
        <>
            <BreadCrumb title="User" subTitle="Dashboard" />
            
            <section className="about-three">
                <div className="container">
                    <h1>Welcome User</h1>
                </div>
            </section>
        </>
    )
}

export default UserDashboard;