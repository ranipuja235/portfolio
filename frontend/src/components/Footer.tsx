type FooterProps = {
  name: string;
};

export function Footer({ name }: FooterProps) {
  return (
    <footer className="border-t border-white/10 bg-slate-950/35 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col gap-4 px-5 py-6 text-sm text-slate-400 md:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
        <p>{name} | Frontend Developer</p>
      </div>
    </footer>
  );
}
