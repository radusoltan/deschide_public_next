import Link from "next/link";
import {useState, useEffect} from "react";
import {useRouter} from "next/router";
import {LanguageSwitcher} from "@/components/Header/LanguageSwitcher";
import {Navigation} from "@/components/Header/Navigation";

export const Header = () => {

  const router = useRouter()
  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetch(`http://api.deschide.local/api/public/categories?locale=${router.locale}`)
        .then(res=>res.json())
        .then(resp => setCategories(resp))

  }, [router.locale]);

  return <header className="">
    <Navigation categories={categories} />

    {/*<LanguageSwitcher />*/}

  </header>
}