import CardFront from "./components/FrontCard";

export default function App() {
  return (
    <div className="w-full h-screen flex">
      <div className="w-[40%] relative h-full bg-[#271540]">
        <div className="absolute top-10 left-[200px]">
          <CardFront />
        </div>
      </div>
      <div className="w-[60%] h-full flex justify-end p-[40px]">
        <h1 className="text-[45px] w-[70%] h-[150px] bg-amber-100 font-bold">Preencha os campos para concluir o pagamento</h1>
      </div>
    </div>
  )
}