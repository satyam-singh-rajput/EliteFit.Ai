import React from 'react';

const SearchAndFilter = ({
  searchQuery,
  setSearchQuery,
  filter,
  setFilter,
}) => {
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setFilter({ ...filter, priority: e.target.value });
  };

  const handleStatusChange = (e) => {
    setFilter({ ...filter, status: e.target.value });
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <select value={filter.priority} onChange={handlePriorityChange}>
        <option value="All">All Priorities</option>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <select value={filter.status} onChange={handleStatusChange}>
        <option value="All">All Statuses</option>
        <option value="Completed">Completed</option>
        <option value="Pending">Pending</option>
      </select>
    </div>
  );
};

export default SearchAndFilter;
