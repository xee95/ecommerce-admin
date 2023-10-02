import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { MainNav } from "./main-nav";
import prismadb from "@/lib/prismadb";
import StoreSwitcher from "./store-switcher";

const navbar = async () => {
    const { userId } = auth();

    if(!userId) {
        redirect('/sign-in');
    }

    const store = await prismadb.store.findMany({
        where: {
            userId,
        }
    });
    return ( 
        <div className="border-b">
            <div  className="flex h-16 items-center px-4">
               <StoreSwitcher items={store}/>
               <MainNav className="mx-6"/>
                <div className="ml-auto  flex items-center space-x-4">
                    <UserButton afterSignOutUrl="/"/>
                </div>
            </div>
            
            
        </div>
     );
}
 
export default navbar;