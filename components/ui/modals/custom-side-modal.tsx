import { SideModalProps } from "@/model/interface";
import { LiaTimesSolid } from "react-icons/lia";
export const SideModal = ({ open, cancel, children}:SideModalProps) => {
  return (
    <>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed right-0 p-5 inset-y-0 top-0 z-50 h-full sm:w-[450px] w-full overflow-y-auto bg-white transition-all duration-500 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center border-b border-gray-200 justify-end p-3">
          <button className="cursor-pointer" onClick={cancel}>
            <LiaTimesSolid size={20} color="#8D8D8D" />
          </button>
        </div>

        <div className="px-8 py-4">{children}</div>
      </div>
      {open && (
        <div
          onClick={cancel}
          className="fixed inset-0 z-40 bg-white/30 backdrop-blur"
        ></div>
      )}
    </>
  );
};
