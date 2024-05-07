function Navbar() {
  return (
    <div className="bg-[#003478] h-[97.07px] flex justify-between items-center">
      <h1 className="text-white text-[30px] font-catamaran pl-[100px] font-[700]">Global Stanford Campus</h1>
      <div className="flex gap-6 px-10 mr-10">
        <button className="text-white text-[20px] font-semibold font-nokora">Students</button>
        <button className="text-white text-[20px] font-semibold font-nokora">Payments</button>
        </div>
    </div>
  )
}

export default Navbar