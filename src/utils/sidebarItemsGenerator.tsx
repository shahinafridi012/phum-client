import { ReactNode } from "react";
import { TUserPaths } from "../types";
import { NavLink } from "react-router-dom";

type TSidebarItem ={
    key: string,
    label: ReactNode,
    children?:TSidebarItem[]
}

export const sidebarItemsGenerator =(items: TUserPaths[],role: string)=>{
    const SidebarItems = items.reduce(
        (acc: TSidebarItem[], item) => {
          if (item.path && item.name) {
            acc.push({
              key: item.name,
              label: <NavLink to={`/${role}/${item.path}`}>{item.name}</NavLink>,
            });
          }
      
          if (item.children) {
            acc.push({
              key: item.name,
              label: item.name,
              children: item.children.map((child) => ({
                key: child.name,
                label: <NavLink to={`/${role}/${child.path}`}>{child.name}</NavLink>,
              })),
            });
          }
      
          return acc;
        },
        []
      )
      return SidebarItems
     ;
}