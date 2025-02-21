import loader from "/Loader1.gif";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-black">
      <img className="h-[50%]"  src={loader} alt="" />
    </div>
  )
}

export default Loading