export default function BackCard({cvv}){
    return (
        <div className="w-[450px] h-[260px] bg-black rounded-xl">
            <div className="w-full h-[30%] flex items-end">
                <div className="w-full h-[60px] bg-[#2f2f2f]"></div>
            </div>
            <div className="w-full h-[70%] flex justify-center pt-[30px]">
                <div className="w-[70%] h-[50px] bg-[#AEB6BF] flex items-center justify-end">
                <p className="text-black text-[20px] mr-2">{cvv || "000"}</p>
                </div>
            </div>
        </div>
    )


    
}


