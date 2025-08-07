import { HeaderProps } from "@/types";

const headerData: HeaderProps = {
  logo: "MEMi Trading PLC",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Blog", href: "/blog" },
    { label: "Products", href: "/#products" },
    { label: "Contact", href: "/#contact" },
  ],
  ctaButtons: [
    { label: "Join Us", variant: "secondary" },
    { label: "Partner With Us", variant: "primary" },
  ],
};

export default headerData;
