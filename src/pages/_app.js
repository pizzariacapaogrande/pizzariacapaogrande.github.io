import '@/styles/globals.css'
import '@/styles/leaf.css'
import Script from 'next/script'
import { MenuProvider } from '@/contexts/MenuContext'

export default function App({ Component, pageProps }) {
    return (
        <MenuProvider>
            <Script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js" />
            <Script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js" />
            <Component {...pageProps} />
        </MenuProvider>
    )
}
