
export default function Footer(){
    return(
        <>
        <footer className="flex justify-center items-center border-t-2 border-t-black text-md font-sansation font-black" >
            <div className="p-8">
                &copy; sysnefo {new Date().getFullYear()}
            </div>
        </footer>
        </>
    )
}