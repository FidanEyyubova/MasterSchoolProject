import * as React from "react";
import { HeroUIProvider } from "@heroui/react";

interface AppProps {
  children: React.ReactNode;
}

function App({ children }: AppProps) {
  return (
    <HeroUIProvider>
      <main>
        {children}
      </main>
    </HeroUIProvider>
  );
}

export default App;