import { Box, UnorderedList, ListItem } from "@chakra-ui/react";

const TransactionList = () => {
  const transactions = [];

  return (
    <Box>
      <UnorderedList>
        {transactions.map((transaction, index) => (
          <ListItem key={index}>{transaction}</ListItem>
        ))}
      </UnorderedList>
    </Box>
  );
};

export default TransactionList;
