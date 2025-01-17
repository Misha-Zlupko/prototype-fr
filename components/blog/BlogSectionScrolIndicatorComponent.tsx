"use client"
import { FC, useEffect, useState } from "react";
import s from "./../../app/sections/article_page/ArticleSection.module.scss";
import classNames from "classnames";
import { useControlledScrolling } from "@/hooks/useControlledScrolling";
interface SectionScrolIndicator {
  items: any[];
}

export const SectionScrolIndicator: FC<SectionScrolIndicator> = ({ items }) => {
  const [activeItem, onclick] = useControlledScrolling(items);

  return (
    <ul className={s.article_navigation_list}>
      {items.map((item) => (
        <li key={item.id}>
          <a
            className={classNames(
              s.article_navigation_link,
              activeItem === item.id ? s.active : ""
            )}
            href={`#${item.id}`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
