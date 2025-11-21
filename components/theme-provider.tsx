"use client"

import { createContext, useContext, useState } from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import type { ThemeProviderProps } from "next-themes"

type Theme = "light" | "dark" | "system"
type ColorTheme = "default" | "ocean" | "forest" | "sunset" | "lavender" | "monochrome"

interface ExtendedThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
  resolvedTheme: Theme | undefined
  colorTheme: ColorTheme
  setColorTheme: (theme: ColorTheme) => void
}

const ExtendedThemeContext = createContext<ExtendedThemeContextProps>({
  theme: "system",
  setTheme: () => {},
  resolvedTheme: undefined,
  colorTheme: "default",
  setColorTheme: () => {},
})

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [colorTheme, setColorTheme] = useState<ColorTheme>("default")

  return (
    <NextThemesProvider attribute="class" defaultTheme="system" enableSystem {...props}>
      <ExtendedThemeContext.Provider
        value={{
          theme: (props.defaultTheme as Theme) || "system",
          setTheme: props.defaultTheme ? (theme: Theme) => {} : () => {},
          resolvedTheme: undefined,
          colorTheme: colorTheme,
          setColorTheme: setColorTheme,
        }}
      >
        {children}
      </ExtendedThemeContext.Provider>
    </NextThemesProvider>
  )
}

export function useExtendedTheme(): ExtendedThemeContextProps {
  return useContext(ExtendedThemeContext)
}

export type { Theme, ColorTheme }
