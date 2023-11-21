import { LogoImg } from "./styled";

interface ILogoProps {
  url?: string;
  alt?: string;
}

export const Logo = ({ url, alt }: ILogoProps) => {
  return (
    <>
      <LogoImg src={url} alt={alt} />
    </>
  );
};