import { VStack, Box, Heading, Button } from "@chakra-ui/react";
import { FaFileExport } from "react-icons/fa";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import FilterSection from "../components/FilterSection";

const Index = () => {
  return (
    <VStack spacing={8}>
      <Heading as="h1" size="xl">
        Budgeting App
      </Heading>
      <TransactionForm />
      <Box>
        <Heading as="h2" size="md">
          Total Balance: $0.00
        </Heading>
        {}
      </Box>
      <TransactionList />
      <FilterSection />
      <Button leftIcon={<FaFileExport />}>Export Transactions</Button>
    </VStack>
  );
};

export default Index;
