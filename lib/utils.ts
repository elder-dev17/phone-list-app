export const formatDate = (dateStr: string) => {
  const date = new Date(dateStr);
  const formater = new Intl.DateTimeFormat("id-ID", {
    dateStyle: "medium",
    timeStyle: "short",
  });
  return formater.format(date);
};
