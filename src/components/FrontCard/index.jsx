import { FcSimCardChip } from "react-icons/fc";
import { LuNfc } from "react-icons/lu";

export default function CardFront({nome, numero}) {
    return (
        <div className="w-[450px] h-[260px] bg-black rounded-xl">
            <div className="w-full h-[30%] flex" >
                <div className="w-[50%] h-full flex items-center pl-2 gap-2">
                    <div className="w-[70px] h-[70px] rounded-full bg-white"></div>
                    <div className="w-[50px] h-[50px] rounded-full bg-white"></div>
                </div>
                <div className="w-[50%] h-full flex p-4 justify-end">
                    <p className="text-[20px] text-white">Nome do banco</p>
                </div>

            </div>
            <div className="w-full h-[40%] flex flex-col">
                <div className="w-full h-[60%] flex items-center">
                <FcSimCardChip size={80} />
                <LuNfc size={30} color="#fff" />

                </div>
                <div className="w-full h[40%] pl-4"> 
                    <p className="text-[30px] text-white">{numero || "0000 0000 0000 0000"}</p>
                </div>
            </div>
            <div className="w-full h-[30%] pl-4">
                <p className="text-white text-[30px]">{nome || "Nome do cartão"}</p>
            </div>
        </div>
    )
}