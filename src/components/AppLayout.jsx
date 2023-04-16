import {Header} from "@/components/Header";
import {Footer} from "@/components/Footer";


export default function AppLayout({children}){




  return <>
    <h1>AppLayout</h1>
    <Header />
    <main className="">
    {children}
    </main>
    <Footer />
  </>
}