
const Content = () => {
  return (
    <div className="h-screen bg-neutral-900 flex items-center justify-center [background:radial-gradient(circle_at_1px_1px,rgba(6,182,212,0.2)_1px,transparent_1px)_0_0/8px_8px]">
      <button className="group relative text-neutral-500 px-12 py-4 rounded-lg bg-black shadow-[0px_1px_4px_0px_rgba(255,255,255,0.1)_inset,2px_-1px_4px_0px_rgba(255,255,255,0.1)_inset]">
        Subscribe
        <span className="absolute inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparen h-px w-3/4 mx-auto" />
        <span className="absolute opacity-0 group-hover:opacity-100 transition-opacity duration-300 inset-x-0 bottom-px bg-gradient-to-r from-transparent via-cyan-500 to-transparen h-[4px] w-full mx-auto blur-md" />
      </button>
    </div>
  );
}

export default Content