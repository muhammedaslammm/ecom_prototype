import FormHead from "./FromHead";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div className="sign-in box--form">
      <FormHead text="let's log in" />
      <SignInForm />
    </div>
  );
};

export default SignIn;
