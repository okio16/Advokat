// NAP и основни данни – трябва да съвпадат 1:1 с Google Business профила.
export const SITE = {
  url: "https://advokat-angeldimitrov.com",
  name: "Адвокат Ангел Димитров София",
  shortName: "Адвокат Ангел Димитров",
  person: "Ангел Тодоров Димитров",
  primaryCategory: "Адвокат",
  city: "София",
  phone: "088 399 6666",
  phoneIntl: "+359883996666",
  phoneDisplayIntl: "+359 88 399 6666",
  email: "adv.angeldimitrov@abv.bg",
  address: {
    full: "ж.к. Надежда 2, ул. „Стражица“ 7, ет. 2, офис 10, 1220 София",
    street: "ул. „Стражица“ 7, ет. 2, офис 10",
    district: "ж.к. Надежда 2",
    postalCode: "1220",
    locality: "София",
    region: "София-град",
    country: "BG",
  },
  geo: { lat: 42.724864, lng: 23.303083 },
  googleMapsUrl: "https://maps.google.com/?cid=15702317251120695099",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2931.0012453688137!2d23.30308311260794!3d42.724864371041114!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa912bcfca12f5%3A0xd9e9d6586f89873b!2z0JDQtNCy0L7QutCw0YIg0JDQvdCz0LXQuyDQlNC40LzQuNGC0YDQvtCy!5e0!3m2!1sbg!2sbg!4v1763482606697!5m2!1sbg!2sbg",
  barRegister: "1100815010",
  barRegisterUrl: "https://bar-register.bg/attorney/1100815010",
  facebook: "https://www.facebook.com/profile.php?id=61584090360443",
  instagram: "https://www.instagram.com/adv.angeldimitrov",
  tiktok: "https://www.tiktok.com/@angeldimitrov552",
} as const;

export const absUrl = (path = "/") => `${SITE.url}${path === "/" ? "" : path}`;
