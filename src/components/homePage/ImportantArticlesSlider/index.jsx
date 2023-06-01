import {useEffect, useState} from "react";
import {useRouter} from "next/router";
import Image from "next/image";
import Link from "next/link";
import {getTranslated} from "@/helpers/article"

export const ImportantArticlesSlider = ({articles, lastPublished}) => {

  const [items, setItems] = useState([])
  const router = useRouter()
  const {locale} = router
  const [lastPublishedNews, setLastPublishedNews] = useState([]);

  useEffect(() => {
    setItems(getTranslated({articles, locale}))
    // setLastPublishedNews({articles: lastPublished.data, locale: locale})
    setLastPublishedNews(getTranslated({articles: lastPublished.data, locale}))
  }, [locale])
  console.log(lastPublishedNews)

  return <>
    <section className="grid grid-cols-2 md:hidden">{
      items.map(({id, title, slug, images, category}) => (
          <div key={id} className="p-2 hover:shadow-lg transition ease-out duration-100">
            <Image
                src={process.env.NEXT_PUBLIC_BACKEND_URL+images[0].thumbnails.find(th=>th.rendition_id===1).path}
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
    <div className="md:flex xm:hidden mr-3">
      {/* Scroll bar */}
      <div className="w-2/5">
        <div className="scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-gray-500 scrollbar-track-gray-300 h-96 overflow-y-scroll">
          {
            lastPublishedNews.map((article, index)=>(<div key={index}>
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



      </div>
      {/*Featured Articles list*/}
      <div className="w-3/5 ml-2 grid grid-cols-2 gap-5 grid-rows-2 overflow-hidden">
        {articles.map(article=>(<div key={article.id} className="">
          <Image
            src={process.env.NEXT_PUBLIC_BACKEND_URL + article.images[0].thumbnails.find(th=>th.rendition_id===1).path}
            width={article.images[0].thumbnails.find(th=>th.rendition_id===1).width}
            height={article.images[0].thumbnails.find(th=>th.rendition_id===1).height}
            className="rounded-md"
            alt={article.title}
          />
          <span className="text-gray-400 text-sm">2 hours ago</span>
          <h2 className="font-bold text-gray-600 text-sm tracking-normal mt-3">
            {article.title}
          </h2>
        </div>))}

      </div>

    </div>
  </>
}