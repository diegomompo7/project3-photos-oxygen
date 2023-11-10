import React from "react";
import { Pagination, Stack } from "@mui/material";

const NumberPages = () => {
    return (
        <Stack spacing={2}>
            <Pagination count={10}></Pagination>
        </Stack>
    )
}

export default NumberPages