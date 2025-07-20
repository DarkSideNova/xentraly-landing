import { cn } from "@/app/utils/cn";
import React, { useEffect, useRef, useState, useCallback } from "react";
import { Form } from "../..";
import { FiCheck, FiX } from "react-icons/fi";

export interface Item {
    id: string;
    title: string;
}

export interface SearchProps extends React.HTMLAttributes<HTMLDivElement> {
    items: Item[];
    position?: "top" | "bottom";
    disabled?: boolean;
    selectedId?: string | null;
    onSelectItem: (id: string) => void;
}

const Search = React.forwardRef<HTMLDivElement, SearchProps>(
    ({ className, items, position, disabled = false, selectedId, onSelectItem, ...props }, ref) => {
        const [searchValue, setSearchValue] = useState("");
        const [filteredItems, setFilteredItems] = useState<Item[]>(items);
        const [isDropdownOpen, setIsDropdownOpen] = useState(false);
        const dropdownRef = useRef<HTMLDivElement>(null);

        // Update searchValue when selectedId changes
        useEffect(() => {
            const selectedItem = items.find((item) => item.id === selectedId);
            setSearchValue(selectedItem ? selectedItem.title : "");
        }, [selectedId, items]);

        // Filter items based on searchValue
        useEffect(() => {
            if (searchValue.trim()) {
                setFilteredItems(
                    items.filter((item) =>
                        item.title.toLowerCase().includes(searchValue.toLowerCase())
                    )
                );
            } else {
                setFilteredItems(items);
            }
        }, [searchValue, items]);

        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearchValue(e.target.value);
            setIsDropdownOpen(true);
        };

        const handleItemSelect = (item: Item) => {
            onSelectItem(item.id);
            setIsDropdownOpen(false);
        };

        const handleClear = () => {
            setSearchValue("");
            onSelectItem(""); // Clear the selected item
        };

        const handleClickOutside = useCallback((event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        }, []);

        useEffect(() => {
            document.addEventListener("mousedown", handleClickOutside);
            return () => {
                document.removeEventListener("mousedown", handleClickOutside);
            };
        }, [handleClickOutside]);

        return (
            <div
                ref={ref}
                {...props}
                className={cn("relative w-full", className)}
            >
                <div className="w-full relative flex items-center gap-2">
                    <Form.Input
                        type="text"
                        value={searchValue}
                        onChange={handleInputChange}
                        disabled={disabled}
                        className="border rounded p-2 w-full"
                        placeholder="Buscar..."
                        onFocus={() => {
                            if(!disabled) {
                                setIsDropdownOpen(true)
                            }
                        }}
                    />
                    {searchValue && (
                        <button
                            type="button"
                            onClick={handleClear}
                            className="absolute right-2 cursor-pointer text-gray-500 text-[16px]"
                        >
                            <FiX />
                        </button>
                    )}
                </div>
                {isDropdownOpen && (
                    <div
                        ref={dropdownRef}
                        className={cn([
                            "absolute z-10 bg-white border border-gray-300 rounded w-full max-h-60 overflow-y-auto",
                            position == "top" ? "bottom-10" : "top-10" 
                        ])}
                    >
                        {filteredItems.length > 0 ? (
                            filteredItems.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleItemSelect(item)}
                                    className={cn(
                                        "w-full flex items-center p-2 cursor-pointer transition hover:bg-gray-200",
                                        selectedId === item.id && "bg-gray-200"
                                    )}
                                >
                                    {selectedId === item.id && (
                                        <span className="absolute right-2 flex items-center justify-center bg-green-500 text-white rounded-full">
                                            <FiCheck />
                                        </span>
                                    )}
                                    <p className="text-[14px] font-normal text-title">
                                        {item.title}
                                    </p>
                                </div>
                            ))
                        ) : (
                            <div className="p-2 text-gray-500 text-sm">
                                No se encontraron resultados
                            </div>
                        )}
                    </div>
                )}
            </div>
        );
    }
);

Search.displayName = "Search";

export { Search };