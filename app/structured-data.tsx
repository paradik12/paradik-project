export function StructuredData() {
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Paradik",
    description: "Iranian B2B Marketplace connecting global buyers with verified Iranian manufacturers",
    url: "https://paradik.com",
    inLanguage: ["en", "fa"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://paradik.com/products?search={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
    publisher: {
      "@type": "Organization",
      name: "Paradik",
      url: "https://paradik.com",
      logo: {
        "@type": "ImageObject",
        url: "https://paradik.com/logo.png",
        width: 200,
        height: 200,
      },
    },
  };

  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Paradik",
    url: "https://paradik.com",
    logo: "https://paradik.com/logo.png",
    description: "Leading B2B marketplace for Iranian products and manufacturers",
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: ["English", "Farsi"],
    },
    sameAs: [
      "https://www.facebook.com/paradik",
      "https://www.linkedin.com/company/paradik",
      "https://twitter.com/paradik",
    ],
  };

  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://paradik.com",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbData) }}
      />
    </>
  );
}

