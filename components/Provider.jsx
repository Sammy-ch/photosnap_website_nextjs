"use client";

import { MantineProvider } from "@mantine/core";

const Provider = ({ children }) => {
    return (
        <MantineProvider>
            {children}
        </MantineProvider>

    )
}

export default Provider;