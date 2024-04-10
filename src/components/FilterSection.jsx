import { Box, FormControl, FormLabel, Select, Button, Input } from "@chakra-ui/react";

const FilterSection = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="filter-type">Filter by Type</FormLabel>
        <Select id="filter-type">
          <option value="all">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <FormLabel htmlFor="filter-category">Filter by Category</FormLabel>
        <Select id="filter-category">
          {}
          <option value="all">All</option>
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
        </Select>
        <FormLabel htmlFor="filter-date">Filter by Date Range</FormLabel>
        <Input id="filter-date-start" type="date" placeholder="Start Date" />
        <Input id="filter-date-end" type="date" placeholder="End Date" />
        <Button mt={4}>Apply Filters</Button>
      </FormControl>
    </Box>
  );
};

export default FilterSection;
