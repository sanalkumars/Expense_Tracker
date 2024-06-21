import { SignInButton, SignedOut, SignedIn, UserButton, SignUpButton } from "@clerk/clerk-react"

 

const AuthPage = () => {
    return (
      <div className="sign-in-container">
            <SignedOut>
                <SignInButton  mode="modal"/>
                <SignUpButton  mode="modal"/>
            </SignedOut>

            <SignedIn>
                <UserButton />
            </SignedIn>
      </div>
    )
  }
  
  export default AuthPage