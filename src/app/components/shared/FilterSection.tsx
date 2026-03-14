'use client';

import React from 'react';

export const FilterSection = ({ filters, updateQueryParams }: any) => {
  return (
    <div className="bg-white p-5 rounded-xl border mb-6 flex gap-4 items-end">
      <div className="flex-1">
        <label className="text-xs font-bold mb-1 block">Search</label>
        <input
          type="text"
          value={filters.searchTerm}
          onChange={(e) => updateQueryParams('searchTerm', e.target.value)}
          placeholder="Search news..."
          className="w-full p-2 border rounded-md"
        />
      </div>

      <div className="w-48">
        <label className="text-xs font-bold mb-1 block">Category</label>
        <select
          value={filters.category}
          onChange={(e) => updateQueryParams('category', e.target.value)}
          className="w-full p-2 border rounded-md"
        >
          <option value="">All</option>
          <option value="International">International</option>
          <option value="Sports">Sports</option>
        </select>
      </div>

      {/* Reset Button */}
      <button
        onClick={() => (window.location.href = window.location.pathname)}
        className="px-4 py-2 bg-gray-100 rounded-md text-sm"
      >
        Reset
      </button>
    </div>
  );
};
