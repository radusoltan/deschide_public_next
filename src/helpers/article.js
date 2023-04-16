export const getTranslated = ({articles, locale}) => {
  const initialItems = []
  articles.map(article=>initialItems.push({
    ...article.translations.find(transition=>transition.locale === locale),
    category: article.category.translations.find(transition=>transition.locale===locale),
    images: article.images
  }))

  return initialItems
}