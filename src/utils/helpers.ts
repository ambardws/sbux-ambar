import { API_BASE_URL } from "@/constants/env";

export const getInitialName = (name: string) => {
    let names = String(name || '')
      .trim()
      .replace('[', '')
      .replace('(', '')
      .split(' ');
    let initials = names[0].substring(0, 1).toUpperCase();
  
    if (names.length > 1) {
      initials += names[names.length - 1].substring(0, 1).toUpperCase();
    }
    return initials;
  };
  

  export const getImageUrl = (url: string) => {
    if (url.includes('http')) {
        return url;
    }
    return API_BASE_URL + url
  }