"use client";

import { MantineProvider } from "@mantine/core";

const Provider = ({ children }) => {
    return (
        <MantineProvider theme={{ colorScheme: "dark" }}>
            {children}
        </MantineProvider>

    )
}

export default Provider;