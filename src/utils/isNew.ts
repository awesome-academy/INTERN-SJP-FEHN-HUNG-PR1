export default function isNew(date: string): boolean {
  const currentDate = new Date();
  const inputDate = new Date(date);
  
  const timeDifference = currentDate.getTime() - inputDate.getTime();
  const daysDifference = timeDifference / (1000 * 3600 * 24);
  
  return daysDifference <= 7;
}
