import { SignIn } from "@clerk/nextjs";

const SignInPage = () => (
        <div className="lg:mx-40 md:mx-28 sm:mx-auto">
          <SignIn path="/sign-in" signUpUrl="/sign-up" />
        </div>
  );

export default SignInPage;