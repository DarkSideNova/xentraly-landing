const Brand = (data: { photo: string }) => {
    return (
        <div className="flex flex-col justify-center items-center relative">
            <img src={"/images/brands/" + data.photo} className="size-full object-contain object-center relative" />
        </div>
    )
}

export default Brand