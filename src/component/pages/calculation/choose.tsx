import { motion, AnimatePresence } from "framer-motion";

type DropdownOptions = {
  label: string;
  value: number;
};

type DropdownProps = {
  label?: string;
  options: DropdownOptions[];
  selected: DropdownOptions;
  isOpen: boolean;
  onToggle: () => void;
  onSelect: (option: DropdownOptions) => void;
};

const Dropdown = ({
  label = "Menu",
  options,
  selected,
  isOpen,
  onToggle,
  onSelect,
}: DropdownProps) => {
  return (
    <div className="relative inline-block w-full sm:max-w-xs text-left">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>

      <button
        onClick={onToggle}
        className="inline-flex w-full justify-between items-center px-4 py-2 bg-white border border-gray-300 rounded-xl shadow-sm hover:bg-gray-100 transition cursor-pointer"
      >
        <span className="truncate">{selected.label}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <path
            fillRule="evenodd"
            d="M12.53 16.28a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 0 1 1.06-1.06L12 14.69l6.97-6.97a.75.75 0 1 1 1.06 1.06l-7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-10 mt-2 w-full rounded-xl bg-white shadow-lg ring-1 ring-gray-300 ring-opacity-5"
          >
            <div className="py-1 max-h-60 overflow-y-auto">
              {options.map((option, i) => {
                const isSelected = option.label === selected.label;
                return (
                  <button
                    key={i}
                    onClick={() => onSelect(option)}
                    className={`flex justify-between w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:rounded-xl transition ${
                      isSelected ? "bg-gray-100 rounded-xl" : ""
                    }`}
                  >
                    <span className="truncate">{option.label}</span>
                    {isSelected && (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-5 h-5 text-green-600"
                      >
                        <path
                          fillRule="evenodd"
                          d="M19.916 4.626a.75.75 0 0 1 .208 1.04l-9 13.5a.75.75 0 0 1-1.154.114l-6-6a.75.75 0 0 1 1.06-1.06l5.353 5.353 8.493-12.74a.75.75 0 0 1 1.04-.207Z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
