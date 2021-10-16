/**
 * 
 * @param {String} dateString in ISO YYYY-MM-DD e.g. "2010-10-01"
 * @returns String human-friendly formatted date e.g. "October 1, 2021" 
 */
export function formatDateFromISOString(dateString) {
    const date = new Date(dateString);
    return date.toLocaleString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC",
    });
}
