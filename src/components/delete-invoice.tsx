import { useInvoices } from "@/store/invoices";
import {
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Dialog,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "./ui/dialog";
import { Button } from "@/components/ui";
import { useNavigate } from "react-router-dom";

type Props = {
  id: string;
};

export function DeleteInvoice({ id }: Props) {
  const deleteInvoice = useInvoices((state) => state.delete);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteInvoice(id);
    navigate("/app");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogDescription>
          Are you sure you want to delete invoice #{id}? This action cannot be
          undone.
        </DialogDescription>
        <DialogFooter>
          <DialogClose asChild>
            <Button variant="ghost">Cancel</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="destructive" onClick={handleDelete}>
              Delete
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
