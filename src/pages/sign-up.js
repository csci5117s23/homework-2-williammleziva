import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
    <div className="lg:mx-40 md:mx-28 sm:mx-auto">
        <SignUp path="/sign-up" signInUrl="/sign-in" />
    </div>
  );

export default SignUpPage;