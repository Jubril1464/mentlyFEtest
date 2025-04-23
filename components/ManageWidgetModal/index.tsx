import { HiBars4 } from "react-icons/hi2";
import { SideModal } from "../ui/modals/custom-side-modal";
import { CustomCheckbox } from "../ui/input/custom-checkbox";
import { widgets } from "@/lib/enums";
import { Button } from "../ui/button/button";

export const ManageWidgetModal = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (value: boolean) => void;
}) => {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <SideModal open={open} cancel={handleClose}>
      <div className="my-10">
        <h1 className="font-bold text-3xl text-secondary-1">Manage Widget</h1>
        <p className="text-xs text-[#374557]">
          Personalize your dashboard by managing widgets add, remove, or reorder
          them to fit your workflow.
        </p>
      </div>

      <div className="space-y-4 text-[#4F4F4F]">
        {widgets.map((widget, index) => (
          <div className="flex justify-between items-center" key={index}>
            <div className="flex gap-3">
              <button className="text-black cursor-pointer">
                <HiBars4 />
              </button>
              <p>{widget}</p>
            </div>
            <CustomCheckbox color="bg-[#07C500] border-[#07C500]" />
          </div>
        ))}
      </div>

      <div className="flex gap-10 mt-10">
        <Button as="button" className="w-full">Save Changes</Button>
        <Button as="button" variant="outline" className="w-full">
          Reset to Default
        </Button>
      </div>
    </SideModal>
  );
};
