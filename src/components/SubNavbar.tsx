import gcsLogo from '../assets/gcs-logo.png';

function SubNavbar() {
  return (
    <div className='flex justify-between h-[111px]'>
        <div className='flex mt-[17px] ml-[94px]'>
            <img src={gcsLogo} className="h-[77px] w-[70px]" alt="" />
            <div className='font-merriweather text-[14px] font-[700] pt-2'>
                <h2>Global</h2>
                <h2>Stanford</h2>
                <h2 className='text-red-600'>CAMPUS</h2>
            </div>
        </div>
        <div className='mr-16 flex items-center'>
            <ul className='flex gap-16 font-nokora font-[21px] font-semibold'>
                <li>Home</li>
                <li>Courses</li>
                <li>About Us</li>
                <li>Alumni</li>
            </ul>
        </div>
    </div>
  )
}

export default SubNavbar