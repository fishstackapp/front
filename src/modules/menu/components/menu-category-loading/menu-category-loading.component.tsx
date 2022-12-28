import { Skeleton } from "@app/common/components/skeleton/skeleton.component"
import { MenuListLoading } from "../menu-list-loading/menu-item-list-loading.component"

export const MenuCategoryLoading = () => {
  return (
    <div className="w-full flex flex-col gap-12">
      <div className="flex flex-col gap-1 items-center">
        <Skeleton width={49} height={13}/>
        <Skeleton width={49} height={4}/>
      </div>
      <MenuListLoading items={9}/>
    </div>
  )
}