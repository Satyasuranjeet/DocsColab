
import { Inter as FontSans } from "next/font/google"
import './globals.css'
import { Metadata } from "next"
import { cn } from "@/lib/utils"
import { ClerkProvider } from "@clerk/nextjs"
import { dark } from "@clerk/themes"
import Provider from "./Provider"
const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const meta: Metadata = {
  title: "Docs Colab",
  description: "Goto place for all your documentation needs",
  

}

export default function RootLayout({ children }: {children: React.ReactNode}) {
  return (
    <ClerkProvider appearance={{baseTheme:dark,
       variables: {colorPrimary :"#3371FF",
        fontSize: "16px",
       },
    }}>
    <html lang="en" suppressHydrationWarning>
     
      <body
        className={cn(
          "min-h-screen font-sans antialiased",
          fontSans.variable
        )}
      >
        <Provider>
        {children}
        </Provider>
       
      </body>
    </html>
    </ClerkProvider>
  )
}
