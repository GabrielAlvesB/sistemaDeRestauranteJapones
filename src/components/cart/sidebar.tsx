import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { RocketIcon } from "lucide-react"
import {Separator} from "@/components/ui/separator";

  
  export const CartSidebar = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <Button>
                    <RocketIcon className="mr-2"/>
                    <p>Carrinho</p>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Carrinho</SheetTitle>
                </SheetHeader>

                <div className="flex flex-col gap-5 my-3">

                </div>
                <Separator clasName="my-4" />
            </SheetContent>
        </Sheet>
    )
  }