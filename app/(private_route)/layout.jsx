import { authOptions } from "@app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";


export default async function PrivateLayout({children}){
  
  const session = await getServerSession(authOptions);


  if(!session?.user){
    redirect('/');
  };
  return <>{children}</>

}