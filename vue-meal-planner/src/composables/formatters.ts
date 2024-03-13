// TODO: Logic Flaw in the 'getOrdinalSuffix' function.
// const getOrdinalSuffix = (day: number): string => {
//     const suffixes = ["th", "st", "nd", "rd"];
//     const remainder = day % 100;

//     return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
// };
// * Modified Logic
const getOrdinalSuffix = (day: number): string => {
    const j = day % 10,
          k = day % 100;
    if (j == 1 && k != 11) {
        return "st";
    }
    if (j == 2 && k != 12) {
        return "nd";
    }
    if (j == 3 && k != 13) {
        return "rd";
    }
    return "th";
};

export const useFormatDate = (dateString: string): string => {
    const date = new Date(dateString);
    const day = date.getDate();
    // Fixed typo in "default"
    const month = date.toLocaleDateString("default", { month: "long" });
    const ordinal = getOrdinalSuffix(day);
    return `${day}${ordinal} of ${month}`;
};


