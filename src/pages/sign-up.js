import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-6">
            <SignUp path="/sign-up" signInUrl="/sign-in" />
        </div>
    </div>
  );

export default SignUpPage;