import { Link } from "react-router-dom";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";
import Checkbox from "../Checkbox";
import Button from "../Button";
import SignupForm from "../SignupForm";

export default function Signup() {
  return (
    <>
      <h1>Create an account</h1>
      <div class="column">
        <Illustration />
        <SignupForm />
      </div>
    </>
  );
}
