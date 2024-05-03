"use client";

import React, { ReactNode } from "react";
import { ThemeProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

function RootProviders({ children }: { children: ReactNode }) {
	const [queryClient] = React.useState(() => new QueryClient({
		defaultOptions: {
			queries: {
				refetchOnWindowFocus: false, // default: true
			},
		},
	}))

	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider
				attribute="class"
				storageKey="theme"
				defaultTheme="dark"
				enableSystem
				disableTransitionOnChange>
				{children}
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	)
}

export default RootProviders