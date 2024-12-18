import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const PublicLayout = lazy(() => import("./layouts/PublicLayout"));
const Home = lazy(() => import("./pages/Home"));
const AdminLayout = lazy(() => import("./layouts/AdminLayout"));
const ViewAdmin = lazy(() => import("./pages/admin/ViewAdmin"));
const CreateAdmin = lazy(() => import("./pages/admin/CreateAdmin"));
const AdminDashboard = lazy(() => import("./pages/admin/AdminDashboard"));
const AdminLogin = lazy(() => import("./pages/admin/AdminLogin"));
const AddCategory = lazy(() => import("./pages/admin/category/CreateCategory"));
const ViewCategory = lazy(() => import("./pages/admin/category/ViewCategory"));
const AddSubCategory = lazy(() => import("./pages/admin/category/AddSubCategory"));
const ViewSubCategory = lazy(() => import("./pages/admin/category/ViewSubCategory"));
const MakeServiceProvider = lazy(() => import("./pages/provider/MakeServiceProvider"));
const ProviderLogin = lazy(() => import("./pages/provider/ProviderLogin"));
const ProviderDashboard = lazy(() => import("./pages/provider/ProviderDashboard"));
const ProviderLayout = lazy(() => import("./layouts/ProviderLayout"));
const PChangePassword = lazy(() => import("./pages/provider/PChangePassword"));
const ViewServiceProvider = lazy(() => import("./pages/provider/ViewServiceProvider"));
const ShowProviders = lazy(() => import("./pages/admin/ShowProviders"));
const AdminForgotPass = lazy(() => import("./pages/admin/AdminForgotPass"));
const AdminVerifyOtp = lazy(() => import("./pages/admin/AdminVerifyOtp"));
const AdminResetP = lazy(() => import("./pages/admin/AdminResetP"));
const CreateState = lazy(() => import("./pages/admin/statecitycreateandview/CreateState"));
const ViewState = lazy(() => import("./pages/admin/statecitycreateandview/ViewState"));
const CreateCity = lazy(() => import("./pages/admin/statecitycreateandview/CreateCity"));
const ViewCity = lazy(() => import("./pages/admin/statecitycreateandview/ViewCity"));
const CreateUser = lazy(() => import("./pages/users/CreateUser"));
const UserDashboard = lazy(() => import("./pages/users/UserDashboard"));
const UserLayout = lazy(() => import("./layouts/UserLayout"));
const UserLogin = lazy(() => import("./pages/users/UserLogin"));
const UserForgotPass = lazy(() => import("./pages/users/UserForgotPass"));
const UserVerfiyOtp = lazy(() => import("./pages/users/UserVerifyOtp"));
const UserResetP = lazy(() => import("./pages/users/UserResetP"));
const UserChangePass = lazy(() => import("./pages/users/UserChangePass"));
const ParticularSubCategory = lazy(() => import("./pages/admin/category/ParticularSubCategory"));
const ViewCategoryOnClick = lazy(() => import("./pages/admin/category/ViewCategoryOnClick"));
const UpdateCategory = lazy(() => import("./pages/admin/category/UpdateCategory"));
const ViewParticularProvider = lazy(() => import("./pages/admin/ViewParticularProvider"));
const BookProvider = lazy(() => import("./pages/provider/BookProvider"));
const ViewUsers = lazy(() => import("./pages/users/ViewParticularUser"));
const Bookingconfirmed = lazy(() => import("./pages/admin/BookingConfirmed"));
const BookingDetails = lazy(() => import("./pages/admin/BookingDetails"));
const BookingCancel = lazy(() => import("./pages/admin/BookingCancel"));
const CompletedBookings = lazy(() => import("./pages/admin/CompletedBookings"));
const ProviderBookingConfirmed = lazy(() => import("./pages/provider/ProviderBookingConfirmed"));
const ProviderMoreDetails = lazy(() => import("./pages/provider/ProviderBookingDetails"));
const ProviderCanceledBookings = lazy(() => import("./pages/provider/ProviderCanceledBookings"));
const ProviderCompletedBookings = lazy(() => import("./pages/provider/ProviderCompletedBookings"));
const UserMyOrders = lazy(() => import("./pages/users/UserMyOrders"));
const UserMoreDetails = lazy(() => import("./pages/users/UserMoreDetails"));
const UpdateSubCategory = lazy(() => import("./pages/admin/category/UpdateSubCategory"));
const UpdateProvider = lazy(() => import("./pages/provider/UpdateProvider"));
const ContactUs = lazy(() => import("./pages/ContactUs"));
const Services = lazy(() => import("./pages/Services"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ComapanyHistory = lazy(() => import("./pages/CompanyHistory"));
const AdminChangePass = lazy(() => import("./pages/admin/AdminChangePass"));
const ProviderForgotPass = lazy(()=> import("./pages/provider/ProviderForgotPass"));
const ProviderResetPass = lazy(()=> import("./pages/provider/ProviderResetPass"));
const ProviderVerifyOtp = lazy(()=> import("./pages/provider/ProviderVerifyOtp"));
const UserAboutUs= lazy(()=> import("./pages/UserAboutUs"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<p>Loading...</p>}>
        <Routes>
          <Route path="/" element={<PublicLayout />}>
            <Route index element={<Home />} />
            <Route path="signin" element={<AdminLogin />} />
            <Route path="service" element={<MakeServiceProvider />} />
            <Route path="loginprovider" element={<ProviderLogin />} />
            <Route path="create-user" element={<CreateUser />} />
            <Route path="login-user" element={<UserLogin />} />
            <Route path="particular-subcategory" element={<ParticularSubCategory />} />
            <Route path="all-category" element={<ViewCategoryOnClick />} />
            <Route path="services/all-category" element={<ViewCategoryOnClick />} />
            <Route path="particular-partner" element={<ViewParticularProvider />} />
            <Route path="/particular-partner/book-provider" element={<BookProvider />} />
            <Route path="contact-us" element={<ContactUs />} />
            <Route path="services" element={<Services />} />
            <Route path="about-us" element={<AboutUs />} />
            <Route path="company-history" element={<ComapanyHistory />} />
            <Route path="orders" element={<UserMyOrders />} />
            <Route path="view-users" element={<ViewUsers />} />
            <Route path="user-change-pass" element={<UserChangePass />} />
            <Route path="user-forgot-pass" element={<UserForgotPass />} />
            <Route path="user-verify-otp" element={<UserVerfiyOtp />} />
            <Route path="user-reset-pass" element={<UserResetP />} />
            <Route path="admin-verify-otp" element={<AdminVerifyOtp />} />
            <Route path="admin-forget-pass" element={<AdminForgotPass />} />
            <Route path="admin-reset-pass" element={<AdminResetP />} />
            <Route path="provider-forgot-pass" element={<ProviderForgotPass />} />
            <Route path="provider-verify-otp" element={<ProviderVerifyOtp />} />
            <Route path="provider-reset-pass" element={<ProviderResetPass />} />
          </Route>

          {/* Provider */}
          <Route path="/provider" element={<ProviderLayout />} >
            <Route index element={<ProviderDashboard />} />
            <Route path="dashboard" element={<ProviderDashboard />} />
            <Route path="change" element={<PChangePassword />} />
            <Route path="view-provider" element={<ViewServiceProvider />} />
            <Route path="view-provider-bookings" element={<ProviderBookingConfirmed />} />
            <Route path="more-details" element={<ProviderMoreDetails />} />
            <Route path="complete" element={<ProviderCompletedBookings />} />
            <Route path="cancel" element={<ProviderCanceledBookings />} />
            <Route path="update-provider" element={<UpdateProvider />} />
          </Route>


          {/* admin */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="view-admin" element={<ViewAdmin />} />
            <Route path="create-admin" element={<CreateAdmin />} />
            <Route path="create-category" element={<AddCategory />} />
            <Route path="view-category" element={<ViewCategory />} />
            <Route path="add-subcategory" element={<AddSubCategory />} />
            <Route path="view-subcategory" element={<ViewSubCategory />} />
            <Route path="show-providers" element={<ShowProviders />} />
            <Route path="create-state" element={<CreateState />} />
            <Route path="view-state" element={<ViewState />} />
            <Route path="create-city" element={<CreateCity />} />
            <Route path="view-city" element={<ViewCity />} />
            <Route path="edit-category" element={<UpdateCategory />} />
            <Route path="confirm-booking-admin" element={<Bookingconfirmed />} />
            <Route path="view-booking-admin" element={<BookingDetails />} />
            <Route path="view-booking-cancel" element={<BookingCancel />} />
            <Route path="completed-booking-admin" element={<CompletedBookings />} />
            <Route path="edit-subcategory" element={<UpdateSubCategory />} />
            <Route path="/admin/about-us" element={<AboutUs />} />
            <Route path="/admin/company-history" element={<ComapanyHistory />} />
            <Route path="/admin/services" element={<Services />} />
            <Route path="change-pass-admin" element={<AdminChangePass/>}/>
          </Route>


          {/* user */}

          <Route path="/user" element={<UserLayout />}>
            <Route index element={<UserDashboard />} />
            <Route path="user-change-pass" element={<UserChangePass />} />
            <Route path="view-users" element={<ViewUsers />} />
            <Route path="orders" element={<UserMyOrders />} />
            <Route path="more-details" element={<UserMoreDetails />} />
            <Route path="about" element={<UserAboutUs />} />
            <Route path="/user/company-history" element={<ComapanyHistory />} />
            <Route path="/user/services" element={<Services />} />
            <Route path="services/all-category" element={<ViewCategoryOnClick />} />
            <Route path="contact-us" element={<ContactUs />} />
          </Route>



        </Routes>
      </Suspense>
    </BrowserRouter>

  )
}

export default App;
