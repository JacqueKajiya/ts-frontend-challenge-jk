interface ITexts {
  title: string;
  subtitle: string;
  slogan: string;
  call_action: string;
  section_login: {
    title: string;
    forgot: string;
    register: string;
    registercall: string;
    login_call: string;
  };
}

interface ILogo {
  logo: string;
  logo_mobile: string;
}

export interface IAuthData {
  texts: ITexts;
  images: ILogo;
}