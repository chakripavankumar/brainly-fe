export function ContentModel ({Open,Close}){
    return(
        <div>
           { Open && <div className="w-screen h-screen  fixed bg-slate-700 top-0 left-0 opacity-75 flex justify-center">
            <div className="flex flex-col justify-center">
                <span className="bg-white p-4 opacity-100 rounded">
                    hey there
                    </span> 
                    </div>
            </div>}
        </div>
    )

}