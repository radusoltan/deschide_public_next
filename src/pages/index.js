import AppLayout from "@/components/AppLayout";
import {useRouter} from "next/router";
import {ImportantArticlesSlider} from "@/components/homePage/ImportantArticlesSlider";
import {LastPublishedNews} from "@/components/homePage/LastPublishedNews";
import {getImportantArticles, getLastPublishedArticles} from "@/services/homePage";

export async function getServerSideProps(context) {
  const { locale } = context

  const importantNews = await getImportantArticles({locale})
  const lastPublishedNews = await getLastPublishedArticles({locale})

  return {
    props: {
      importantNews,
      lastPublishedNews
    }, // will be passed to the page component as props
  }
}


export default function Home({importantNews,lastPublishedNews}) {

  const router = useRouter()
  return (
    <AppLayout>
      <ImportantArticlesSlider articles={importantNews} />
      <LastPublishedNews articles={lastPublishedNews}  />
      APP {router.locale}
    </AppLayout>
  )
}
