

const Navbar = () => {
  return (
    <div className='flex items-center justify-between px-6 w-full text-white bg-[#252830] h-[50px]'>
      <div className='w-1/2 flex justify-start'>Form.io</div>
      <ul className='flex w-2/5 gap-10'>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Services</li>
        <li>Blog</li>
      </ul>
    </div>
  );
};

export default Navbar
