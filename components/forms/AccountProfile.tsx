"use client";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";

interface Props{
  user:{
    id:string,
    objectId:string,
    username:string,
    name:string,
    bio:string,
    image:string,
  },
  btnTitle:string
}

const AccountProfile = ({user,btnTitle}:Props) => {
  return <div>
    Account profile
  </div>;
};

export default AccountProfile;
