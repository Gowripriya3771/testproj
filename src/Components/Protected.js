import { Navigate } from "react-router-dom";
const Protected = ({children }) => {
    let isLoggedIn=localStorage.getItem("emailData")
  if (!isLoggedIn) {
    alert("Login to continue");
    return <Navigate to="/" replace />;
  }
  return children;
};
export default Protected;