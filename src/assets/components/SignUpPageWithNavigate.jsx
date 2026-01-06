import { useNavigate } from "react-router-dom";
import SignUpPage from "./SignUpPage";

export default function SignUpPageWithNavigate() {
  const navigate = useNavigate();
  return <SignUpPage navigate={navigate} />;
}
