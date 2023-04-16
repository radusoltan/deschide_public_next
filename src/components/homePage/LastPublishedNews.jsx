import Image from "next/image";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import {getTranslated} from "@/helpers/article";


export const LastPublishedNews = ({articles}) => {

  const router = useRouter()
  const {locale} = router
  const [items, setItems] = useState([]);

  useEffect(() => setItems(getTranslated({articles: articles.data, locale})), [locale]);


  return <section>
    <div className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-300 h-96 overflow-y-scroll">
      {
        items.map((article, index)=>(<div key={index}>
          {article.title && article.images.length > 0 && <div className="flex m-2">
            <div className="w-1/5">
              <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL+article.images[0].thumbnails.find(t=>t.rendition_id===3).path}
                alt={article.title}
                width={article.images[0].thumbnails.find(t=>t.rendition_id===3).width}
                height={article.images[0].thumbnails.find(t=>t.rendition_id===3).height}
                className="rounded-md"
              />
            </div>
            <div className="w-4/5 ml-5">
              <h2 className="text-gray-600 font-bold text-md">{article.title}</h2>
              <span className="mt-5 text-sm text-gray-400">{article.category.title}</span>
            </div>
          </div>}
        </div>))
      }
      <button
        onClick={() => router.push('/all-news')}
        className="w-full bg-gray-300 h-16 hover:bg-gray-500 hover:text-gray-50"
      >
        <span className="font-bold text-mb">ALL NEWS</span>
      </button>
    </div>
  </section>
}