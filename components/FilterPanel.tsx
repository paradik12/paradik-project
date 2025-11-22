interface FilterPanelProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function FilterPanel({
  categories,
  selectedCategory,
  onCategoryChange,
}: FilterPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">فیلتر محصولات</h2>
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-gray-700 mb-3">دسته‌بندی</h3>
        {categories.map((category) => (
          <label
            key={category}
            className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded"
          >
            <input
              type="radio"
              name="category"
              value={category}
              checked={selectedCategory === category}
              onChange={(e) => onCategoryChange(e.target.value)}
              className="w-4 h-4 text-primary-600 focus:ring-primary-500"
            />
            <span className="text-gray-700 capitalize">
              {category === 'all' ? 'همه دسته‌ها' : category}
            </span>
          </label>
        ))}
      </div>
    </div>
  )
}


