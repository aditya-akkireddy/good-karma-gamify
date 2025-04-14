
import { Package, FileText, Users } from "lucide-react";
import { ServiceCategory } from "@/pages/GoodDeeds";

interface ServiceCategoriesProps {
  activeCategory: ServiceCategory;
  onSelectCategory: (category: ServiceCategory) => void;
}

export function ServiceCategories({ 
  activeCategory, 
  onSelectCategory 
}: ServiceCategoriesProps) {
  const categories = [
    { id: "all", label: "All Requests", icon: null },
    { id: "parcel", label: "Parcel Delivery", icon: Package },
    { id: "notes", label: "Note Exchange", icon: FileText },
    { id: "study", label: "Study Groups", icon: Users }
  ];

  return (
    <div className="flex flex-wrap gap-3 md:gap-4 justify-center mb-8">
      {categories.map((category) => {
        const isActive = activeCategory === category.id;
        const Icon = category.icon;
        
        return (
          <button
            key={category.id}
            onClick={() => onSelectCategory(category.id as ServiceCategory)}
            className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
              isActive 
                ? "bg-primary text-primary-foreground" 
                : "bg-muted hover:bg-muted/80"
            }`}
          >
            {Icon && <Icon className="h-4 w-4" />}
            <span>{category.label}</span>
          </button>
        );
      })}
    </div>
  );
}
