"use client";
import { CustomInput } from "./ui/input/custom-input";
import { useForm, } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "./ui/button/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
});
type FormData = z.infer<typeof schema>;

export const LoginForm = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  function onSubmit(data: FormData) {
    console.log(data);
    router.push("/dashboard");
  }

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="min-[830px]:w-[424px] md:w-[380px] w-full flex flex-col gap-3 "
    >
      <CustomInput
        name="email"
        label="Email Address"
        register={register}
        errors={errors}
        placeholder="E.g Aliriaz@Uifry.com"
      />
      <CustomInput
        name="password"
        label="Password"
        register={register}
        errors={errors}
        placeholder="********"
        inputType="password"
      />
      <div className="flex justify-end">
        <Link
          href="/"
          className="font-semibold font-karla text-secondary-1 text-base"
        >
          I Forgot My Password
        </Link>
      </div>
      <Button as="button" size="full" className="mt-10">
        Login
      </Button>
      <div className="flex justify-center text-base items-center gap-1">
        <p>Not Ali Riaz?</p>
        <Link
          href="/"
          className="font-semibold font-karla text-secondary-1 underline"
        >
          Login To Continue
        </Link>
      </div>
    </form>
  );
};
