import {useRouter} from "next/router";
import 'flag-icons/css/flag-icons.min.css'
import {Menu, Transition} from "@headlessui/react";
import {Fragment} from "react";

export const LanguageSwitcher = () => {
  const router = useRouter()
  const {locale, locales} = router

  const FlagIcon = ({countryCode}) => {

    if (countryCode === 'en') countryCode = 'gb'

    return <span className={`rounded-full fi fis fiCircle inline-block mr-2 fi-${countryCode}`} />

  }

  return <Menu as="div" className="relative">
    <Menu.Button className="flex text-md items-center">
      <span className="sr-only">Open user menu</span>
      <FlagIcon countryCode={locale}/>
      <span className="text-sm">{locale}</span>
      <svg
          className="-mr-1 ml-2 h-5 w-5"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
      >
        <path
            fillRule="evenodd"
            d="M10.293 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
            clipRule="evenodd"
        />
      </svg>
    </Menu.Button>
    <Transition
      as={Fragment}
      enter="transition ease-out duration-700"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 z-10 mt-5 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">{

        locales.map(language=><button
          key={language}
          onClick={()=>router.push('/', '/', { locale: language })}
          className={`hover:bg-gray-100 block px-4 py-2 text-sm text-gray-700 ${locale === language ? 'bg-gray-100': ''}` }
        >
          <FlagIcon countryCode={language}/>
          {language}
        </button>)
      }</Menu.Items>
    </Transition>
  </Menu>

}