import { ArrowDownIcon } from "@/components/icons";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui";
import { Checkbox } from "@/components/ui/checkbox";
import useMediaQuery from "@/hooks/use-media-query";

const filterItems = ["Draft", "Pending", "Paid"];

export function FilterPopover() {
  const isMobile = useMediaQuery("(max-width: 40rem)");
  return (
    <Popover>
      <PopoverTrigger className="flex items-center">
        <span className="mr-2">{isMobile ? "Filter" : "Filter by status"}</span>
        <ArrowDownIcon />
      </PopoverTrigger>
      <PopoverContent className="w-48 font-bold">
        <div className="flex flex-col gap-4">
          {filterItems.map((item) => (
            <div className="flex items-end space-x-2">
              <Checkbox id={item} />
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
