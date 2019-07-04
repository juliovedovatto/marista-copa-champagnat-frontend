/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"

interface Meta {
  name: string,
  content: any,
  property?: undefined
}

interface Props {
  description?: string,
  lang?: string,
  meta?: Meta[],
  title?: string
}

function SEO({ description, lang, meta, title }: Props) {
  const metaDescription = description
  const metaTags = [
    {
      name: `description`,
      content: metaDescription,
    },
  ].concat(meta || []);

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${title}`}
      meta={metaTags}
    />
  )
}

export default SEO
