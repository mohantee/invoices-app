import { ArrowDownIcon } from "@/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import { useInvoices } from "@/store/invoices";

const filterItems = ["Draft", "Pending", "Paid"];

export function FilterPopover() {
  const filter = useInvoices((state) => state.filter);
  const toggleFilter = useInvoices((state) => state.toggleFilter);
  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <span className="mr-2">
          Filter <span className="hidden sm:inline">by status</span>
        </span>
        <ArrowDownIcon />
      </PopoverTrigger>
      <PopoverContent className="w-48 font-bold">
        <div className="flex flex-col gap-4">
          {filterItems.map((item) => (
            <div key={item} className="flex items-end space-x-2">
              <Checkbox
                id={item}
                checked={filter[item.toLowerCase()]}
                onCheckedChange={() => toggleFilter(item.toLowerCase())}
              />
              <label
                htmlFor={item}
                className="text-sm font-bold leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {item}
              </label>
            </div>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
}
