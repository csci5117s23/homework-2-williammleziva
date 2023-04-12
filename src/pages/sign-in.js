import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
    <div className="bg-white">
        <div className="mx-auto max-w-2xl py-6">
          <SignIn path="/sign-in" signUpUrl="/sign-up" />
        </div>
    </div>
  );

export default SignInPage;