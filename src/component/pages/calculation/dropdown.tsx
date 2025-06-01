import { useState } from "react";
import Dropdown from "./choose";
import toast from "react-hot-toast";

interface DropdownGridProps {
  onSubmit: (weights: Record<string, number>) => void
}


export default function DropdownGrid({onSubmit} :DropdownGridProps) {
  const dropdowns = [
    {
      label: "Facilities",
      options: [
        { label: "Complete", value: 0.9 },
        { label: "Basic", value: 0.6 },
        { label: "Limited", value: 0.3 },
      ],
    },
    {
      label: "Price",
      options: [
        { label: "Cheap", value: 0.9 },
        { label: "Moderate", value: 0.6 },
        { label: "Expensive", value: 0.3 },
      ],
    },
    {
      label: "Distance",
      options: [
        { label: "Near", value: 0.9 },
        { label: "Medium", value: 0.6 },
        { label: "Far", value: 0.3 },
      ],
    },
    {
      label: "Parking",
      options: [
        { label: "Available", value: 0.9 },
        { label: "Limited", value: 0.6 },
        { label: "None", value: 0.3 },
      ],
    },
    {
      label: "Photo Spot",
      options: [
        { label: "Outdoor", value: 0.9 },
        { label: "Mixed", value: 0.6 },
        { label: "Indoor", value: 0.3 },
      ],
    },
    {
      label: "Rating",
      options: [
        { label: "Excellent", value: 0.9 },
        { label: "Good", value: 0.6 },
        { label: "Fair", value: 0.3 },
      ],
    },
  ];
  

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const [selectedValues, setSelectedValues] = useState(
    dropdowns.map((d) => d.options[0])
  );

  const handleSelect = (index: number, option: {label:string, value: number}) => {
    const updated = [...selectedValues];
    updated[index] = option;
    setSelectedValues(updated);
    setOpenIndex(null);
  };

  const handleSubmit = () => {
    const weights: Record<string, number> = {};

    dropdowns.forEach((dropdown, index) => {
      weights[dropdown.label.toLowerCase().replace(/\s/g, "_")] = selectedValues[index].value
    });
    onSubmit(weights);
  }


  return (
    <div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
      {dropdowns.map((dropdown, index) => (
        <Dropdown
          key={index}
          label={dropdown.label}
          selected={selectedValues[index]}
          options={dropdown.options}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
          onSelect={(option) => handleSelect(index, option)}
        />
      ))}
    </div>
       <button className="border border-gray-200 bg-[#4B83FE] w-full p-3 text-white font-bold rounded-sm cursor-pointer text-center" onClick={handleSubmit}>
       Find
       </button>
       </div>
  );
}
