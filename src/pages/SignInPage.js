import useToogleValue from "hooks/useToogleValue";
import LayoutAuthentication from "../layout/LayoutAuthentication";
import FormGroup from "components/common/FormGroup";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { Label } from "components/label";
import { Input } from "components/input";
import { IconEyeToggle } from "components/icons";
import { Button } from "components/button";

const schema = yup.object({
  email: yup.string().required("This field is required").email(""),
  password: yup
    .string()
    .required("This field is required")
    .min(8, "Password must be 8 character"),
});

const SignInPage = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema), mode: "onSubmit" });

  const { value: showPassword, handleToogleValue: handleTooglePassword } =
    useToogleValue();

  const handleSignIn = (values) => {
    console.log(
      "🚀 ~ file: SignInPage.js ~ line 20 ~ handleSignIn ~ values",
      values
    );
  };

  return (
    <LayoutAuthentication heading="Welcome Back!" typeLayout={1}>
      <form autoComplete="off" onSubmit={handleSubmit(handleSignIn)}>
        <FormGroup>
          <Label html="email">Email *</Label>
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="example@gmail.com"
            error={errors.email?.message}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label html="password">Password *</Label>
          <Input
            control={control}
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter Password"
            error={errors.password?.message}
          >
            <IconEyeToggle
              open={showPassword}
              onClick={handleTooglePassword}
            ></IconEyeToggle>
          </Input>
        </FormGroup>
        <FormGroup>
          <span className="inline-block text-sm font-medium text-primary ml-auto">
            Forgot password
          </span>
        </FormGroup>
        <Button type="submit" className="bg-primary w-full">
          Sign in
        </Button>
      </form>
    </LayoutAuthentication>
  );
};

export default SignInPage;
