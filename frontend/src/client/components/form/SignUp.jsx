import FormHead from "./FromHead";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="sign-up box--form">
      <FormHead text="let's register first" />
      <SignUpForm />
    </div>
  );
};
export default SignUp;
