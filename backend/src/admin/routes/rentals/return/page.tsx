import { defineRouteConfig } from "@medusajs/admin-sdk"
import { Container, Heading } from "@medusajs/ui"

const ReturnRentals = () => {
  return (
    <Container className="divide-y p-0">
      <div className="flex items-center justify-between px-6 py-4">
        <Heading level="h2">Return Rentals Page</Heading>
      </div>
    </Container>
  )
}

export const config = defineRouteConfig({
  label: "Return Rentals",
})

export default ReturnRentals