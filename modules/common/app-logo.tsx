import Link from "next/link";

export function AppLogo() {
  return (
    <Link href="/">
      <img src="/logo.png" alt="copia Logo" className="max-w-[40px]" width={40} />
    </Link>
  );
}
