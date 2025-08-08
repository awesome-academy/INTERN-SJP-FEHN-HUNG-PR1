export default function formatDate(dateString: string): string {
  const date = new Date(dateString);

  const day = date.getDate();
  const month = date.getMonth() + 1; 
  const year = date.getFullYear();

  const weekdays = [
    "Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", 
    "Thứ 5", "Thứ 6", "Thứ 7"
  ];
  const weekdayName = weekdays[date.getDay()];

  const finalString = `${weekdayName}, ngày ${day}, tháng ${month}, năm ${year}`;

  return finalString;
}
