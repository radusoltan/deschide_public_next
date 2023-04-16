
export const getImportantArticles = async ({locale}) => {

  const res =  await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL+`api/public/important-articles?locale=${locale}`
  )
  return await res.json()

}

export const getLastPublishedArticles = async ({locale, page}) => {

  if (!page) page = 1

  const res = await fetch(
      process.env.NEXT_PUBLIC_BACKEND_URL +
      `published-articles?locale=${locale}&page=${page}`
  )

  return await res.json()
}