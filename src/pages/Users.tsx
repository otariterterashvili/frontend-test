import React from "react";

import { Container, Table, Title } from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { getUserFn } from "../services/users";
import UserTable from "../components/Tables/UserTable";

const Users = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getUsers"],
    queryFn: getUserFn,
  });
  if( isLoading) {
    return <span>Data is Loading</span>
  }
  return (
    <Container>
      <Title align="center" mt="xl">Users Table</Title>
      <UserTable data={data || []} />
    </Container>
  );
};

export default Users;
