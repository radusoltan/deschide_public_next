import {Disclosure, Transition} from "@headlessui/react";
import {Bars3Icon, XMarkIcon} from "@heroicons/react/20/solid";
import {Logo} from "@/components/Header/Logo";
import {LanguageSwitcher} from "@/components/Header/LanguageSwitcher";
import {useParams} from "next/navigation";
import {Fragment} from "react";

export const Navigation = ({categories}) => {

  const params = useParams()


  return <Disclosure as="nav" className="">{
    ({open}) => (<>
      <div className="relative flex h-16 items-center justify-between m-2">
        <div className="flex flex-shrink-0 items-center ">
          <Logo />
        </div>
        <div className="flex items-center">
          <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-gray-200 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-100">
            <span className="sr-only">Open main menu</span>
            {open ? (
                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
            ) : (
                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
            )}
          </Disclosure.Button>
        </div>

        <div className="flex items-center right-0"><LanguageSwitcher /></div>
      </div>
      <Transition
          as={Fragment}
          enter="transition ease-out duration-700"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
      ><Disclosure.Panel className="relative">

        <div className="absolute bg-gray-300 w-screen">{
          categories.map(category => <Disclosure.Button
            key={category.slug}
            as="a"
            href={`/${category.slug}`}
            className={`m-2 block rounded-sd text-base font-medium ${params?.category === category.slug ? 'bg-gray-300 text-gray-500' : 'text-gray-600 hover:bg-gray-600 hover:text-white transition ease-out duration-100'}`}
          >
            <span className="">{category.name}</span>
          </Disclosure.Button>)
        }</div>

      </Disclosure.Panel></Transition>
    </>)
  }</Disclosure>
}