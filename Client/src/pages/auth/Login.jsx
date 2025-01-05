import { Link } from "react-router-dom";
import { useState } from "react";
import CommonForm from "@/components/common/form";
import { loginFormControls } from "@/config";
import { useDispatch } from "react-redux";
import { loginUser } from "@/store/auth-slice";
import { toast } from "@/hooks/use-toast";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();

  function onSubmit(event){
    event.preventDefault();
    
    dispatch(loginUser(formData)).then((data)=>{
      console.log(data);
      if(data?.payload?.success){
        toast({
          title: data?.payload?.message,
        })
      }else{
        toast({
          title: data?.payload?.message,
          variant: "destructive",
      });
    }})
  }

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Sign in to your account
        </h1>
        
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={'Sign In'}
        formData={formData}
        setFormData={setFormData}   
        onSubmit={onSubmit}     
      />
      <p className="mt-2 text-primary text-center">
          Don't have an account?
          <Link
            to="/auth/register"
            className="font-medium text-primary hover:underline"
          >
            {" "}
            Register
          </Link>
        </p>
    </div>
  );
}

export default AuthLogin;
