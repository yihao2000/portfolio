"use client";
import { useEffect, useRef } from "react";
import Typed from "typed.js";

export default function Introduction() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Hello !", "I am Andrew G"],
      typeSpeed: 100,
      loop: true,
      backSpeed: 60,
      backDelay: 2500,
      showCursor: false,
    });

    return () => {
      typed.destroy();
    };
  }, []);
  return <span className="text-7xl max-w-md" ref={el}></span>;
}
