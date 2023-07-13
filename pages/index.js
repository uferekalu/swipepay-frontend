import ContainerHomeDefault from "@/components/layouts/ContainerHomeDefault";

export default function Home() {
  return (
    <ContainerHomeDefault title="Checkout process">
      <div className="flex flex-col max-w-sm mt-9 m-auto text-justify p-5 rounded-lg shadow-lg bg-white text-black text-sm">
        <h3 className="text-center mb-3 font-medium text-black text-xl justify-center items-center">Swipe Pay Checkout Process</h3>
        Checkout process of an online store using node.js as backend and next.js as frontend.
        It encompasses connecting to stripe api and storing all payed orders in a MongoDB database.
        This includes a simple checkout page and with the Stripe integration, every confirmed payed order
        is stored in the database with the order history of the user.
        Click on signup to register and use {"pm_card_mastercard"} as Payment method ID to create a mock order.
      </div>
    </ContainerHomeDefault>
  )
}
