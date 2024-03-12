

const getOrdinalSuffix = (day: number): string => {
    const suffixes = ["th", "st", "nd", "rd"];
    const remainder = day % 100;

    return suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0];
};

export const formatDate = (date: Date): string => {
    const day = date.getDate();
    const month = date.toLocaleDateString("defualt", { month: "long" });
    const ordinal = getOrdinalSuffix(day);
    return ${day}${ordinal} of ${month};
}