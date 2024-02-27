import { Button } from "@/ui/button";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Proto() {
  return (
    <div className="mt-[30vh] flex flex-col items-center gap-3 px-5">
      <Button variant="outline" className="gap-2 items-center px-6 w-full">
        <Logo />
        <span className="mb-0.5">Continue with Aidmedium</span>
      </Button>
      <Button variant="outline" className="gap-2 items-center px-6 w-full">
        <FcGoogle size={18} />
        <span className="">Continue with Google</span>
      </Button>
    </div>
  );
}

const Logo = () => {
  return (
    <svg
      width={16}
      height={18}
      viewBox="0 0 315 330"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M91.9174 2.0071C91.9174 0.533334 0.543872 228.967 2.01764 228.967C3.4914 228.967 68.3368 230.441 69.8109 228.967C71.285 227.493 90.444 172.964 93.3912 172.964C96.3383 172.964 155.289 327.71 156.763 327.709C158.237 327.709 158.237 326.236 158.237 326.236C158.237 326.236 192.134 246.652 192.133 243.705C192.133 240.757 91.9174 3.48087 91.9174 2.0071Z"
        className="fill-foreground"
      />
      <path
        d="M184.765 87.4855C184.765 86.0117 217.188 2.00701 220.135 2.0071C223.082 2.0072 314.456 228.967 312.982 230.441C311.508 231.915 243.715 231.915 242.242 230.441C240.768 228.967 184.764 88.9594 184.765 87.4855Z"
        className="fill-foreground"
      />
      <path
        d="M91.9174 2.0071C91.9174 0.533334 0.543872 228.967 2.01764 228.967C3.4914 228.967 68.3368 230.441 69.8109 228.967C71.285 227.493 90.444 172.964 93.3912 172.964C96.3383 172.964 155.289 327.71 156.763 327.709C158.237 327.709 158.237 326.236 158.237 326.236C158.237 326.236 192.134 246.652 192.133 243.705C192.133 240.757 91.9174 3.48087 91.9174 2.0071Z"
        className="fill-foreground"
        strokeWidth="2.94753"
      />
      <path
        d="M184.765 87.4855C184.765 86.0117 217.188 2.00701 220.135 2.0071C223.082 2.0072 314.456 228.967 312.982 230.441C311.508 231.915 243.715 231.915 242.242 230.441C240.768 228.967 184.764 88.9594 184.765 87.4855Z"
        className="fill-foreground"
        strokeWidth="2.94753"
      />
    </svg>
  );
};
