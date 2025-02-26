import loader from "/Loader3.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-[#050F1A]">
      <img className="h-[50%]"  src={loader} alt="" />
    </div>
  )
}

export default Loading