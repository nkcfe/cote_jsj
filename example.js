function createCalendar(year) {
  const calendar = [];

  for (let month = 0; month < 12; month++) {
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const monthArray = Array.from({ length: daysInMonth }, (_, index) => {
      const day = index + 1;
      const formattedDate = `${year}.${String(month + 1).padStart(
        2,
        "0"
      )}.${String(day).padStart(2, "0")}`;
      return formattedDate;
    });
    calendar.push(monthArray);
  }

  return calendar;
}

console.log(createCalendar(2024));
