import { useCart } from "@lib/context/cart-context"
import { clx } from "@medusajs/ui"
import Spinner from "@modules/common/icons/spinner"
import { useState } from "react"

const DeleteButton = ({
  id,
  for_rent = false,
  className,
}: {
  id: string,
  for_rent?: boolean,
  className?: string
}) => {
  const [isDeleting, setIsDeleting] = useState(false)

  const { handleDeleteItem, handleDeleteRentItem } = useCart()

  const handleDelete = async (id: string) => {
    setIsDeleting(true)

    if(for_rent) {
      await handleDeleteRentItem(id)
    } else {
      await handleDeleteItem(id)
    }
    
  }

  return (
    <div
      className={clx(
        "flex items-center justify-between text-small-regular",
        className
      )}
    >
      <button
        className="text-neutral-950 text-xs shadow-[0_0_0_1px_rgba(0,0,0,0.1)] rounded-full px-2 py-1 hover:bg-neutral-100 min-w-20 flex items-center justify-center"
        onClick={() => handleDelete(id)}
      >
        {isDeleting ? <Spinner size={12} /> : "Remove"}
      </button>
    </div>
  )
}

export default DeleteButton
