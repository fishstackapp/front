import { ShowInfo } from "@app/common/components/show-info/show-info.component"
import { useGetMenuQuery } from "@app/core/types"
import { MenuListLoading } from "../components/menu-list-loading/menu-item-list-loading.component"
import { MenuList } from "../components/menu-list/menu-list.component"

export const MenuPage = () => {
  const {data, loading, error} = useGetMenuQuery()

  if(error) {
    return (
      <ShowInfo type={"error"}>
        <p> Упс сталася помилка 😥</p>
        <p> Спробуйте трохи пізніше</p>
      </ShowInfo>
    )
  }

  if(loading){
    return <MenuListLoading items={9}/>
  }

  if(!data){
    return (
      <ShowInfo type={"info"}>
        <p>Нажаль сталася помилка 😕</p>
      </ShowInfo>
    )
  }

  return (
    <MenuList items={data.menu}/>
  )
}