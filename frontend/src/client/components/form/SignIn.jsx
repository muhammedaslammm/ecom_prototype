import FormHead from "./FromHead";
import SignInForm from "./SignInForm";

const SignIn = () => {
  return (
    <div className="w-full">
      <FormHead text="let's log in before further action!" />
      <SignInForm />
    </div>
  );
};

export default SignIn;
