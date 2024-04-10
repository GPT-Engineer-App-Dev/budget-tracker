import { Box, FormControl, FormLabel, Input, Select, Button } from "@chakra-ui/react";

const TransactionForm = () => {
  return (
    <Box>
      <FormControl>
        <FormLabel htmlFor="date">Date</FormLabel>
        <Input id="date" type="date" />
        <FormLabel htmlFor="amount">Amount</FormLabel>
        <Input id="amount" type="number" />
        <FormLabel htmlFor="type">Type</FormLabel>
        <Select id="type">
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </Select>
        <FormLabel htmlFor="category">Category</FormLabel>
        <Select id="category">
          {}
          <option value="groceries">Groceries</option>
          <option value="bills">Bills</option>
          <option value="entertainment">Entertainment</option>
        </Select>
        <Button mt={4}>Add Transaction</Button>
      </FormControl>
    </Box>
  );
};

export default TransactionForm;
