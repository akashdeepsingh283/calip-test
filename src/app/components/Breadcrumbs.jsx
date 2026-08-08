import Link from "next/link";

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol
        className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground"
        itemScope
        itemType="https://schema.org/BreadcrumbList"
      >
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={item.path}
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
              className="flex items-center gap-1.5"
            >
              {i > 0 && (
                <span aria-hidden="true" className="text-muted-foreground/40">
                  /
                </span>
              )}
              {isLast ? (
                <span
                  itemProp="name"
                  aria-current="page"
                  className="text-foreground/70"
                >
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  itemProp="item"
                  className="transition-colors hover:text-foreground"
                >
                  <span itemProp="name">{item.name}</span>
                </Link>
              )}
              <meta itemProp="position" content={String(i + 1)} />
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
