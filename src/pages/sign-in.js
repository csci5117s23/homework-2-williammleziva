import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
        <div className="mx-40 xs:mx-5 max-w-2xl py-6">
          <SignIn path="/sign-in" signUpUrl="/sign-up" />
        </div>
  );

export default SignInPage;