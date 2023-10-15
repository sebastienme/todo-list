import { format } from "date-fns";

export const dates = (() => {
  const translateDays = [
    { 1: "Lundi" },
    { 2: "Mardi" },
    { 3: "Mercredi" },
    { 4: "Jeudi" },
    { 5: "Vendredi" },
    { 6: "Samedi" },
    { 7: "Dimanche" },
  ];

  const translateMonths = [
    { 1: "Janvier" },
    { 2: "Février" },
    { 3: "Mars" },
    { 4: "Avril" },
    { 5: "Mai" },
    { 6: "Juin" },
    { 7: "Juillet" },
    { 8: "Août" },
    { 9: "Septembre" },
    { 10: "Octobre" },
    { 11: "Novembre" },
    { 12: "Décembre" },
  ];

  const getDates = (date) => {
    const day = translateDays.find(
      (element) => element[format(new Date(date), "e")] != null,
    );
    const dayOfTheWeek = Object.values(day)[0];
    const dayOfTheMonth = format(new Date(date), "d");
    const month = translateMonths.find(
      (element) => element[format(new Date(date), "M")] != null,
    );
    const monthOfTheYear = Object.values(month)[0].toLowerCase();
    return `${dayOfTheWeek}, ${dayOfTheMonth} ${monthOfTheYear}`;
  };

  return {
    getDates,
  };
})();
