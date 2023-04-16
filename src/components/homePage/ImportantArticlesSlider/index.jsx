import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import {getTranslated} from "@/helpers/article";

export const ImportantArticlesSlider = ({articles}) => {

  const [items, setItems] = useState([])
  const {locale} = useRouter()

  useEffect(() => setItems(getTranslated({articles, locale})), [locale])

  return <section className="grid grid-cols-2">{
    items.map(({id, title, slug, images, category}) => (
      <div key={id} className="p-2 hover:shadow-lg transition ease-out duration-100">
        <Image
          src={process.env.NEXT_PUBLIC_BACKEND_URL+images[0].thumbnails.find(th=>th.rendition_id===3).path}
          width={images[0].thumbnails.find(th=>th.rendition_id===3).width}
          height={images[0].thumbnails.find(th=>th.rendition_id===3).height}
          alt={title}
          className="mb-5 rounded-md"
        />
        <Link href={`/${category.slug}/${slug}`} locale={locale}>
          <h1 className="texm-md font-bold text-gray-700 hover:text-gray-500 transition ease-out duration-300">{title}</h1>
        </Link>

        <span className="text-gray-400 text-sm">
          {category.title}
        </span>
      </div>
    ))
  }</section>
}