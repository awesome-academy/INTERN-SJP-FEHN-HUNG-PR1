const date = new Date();
date.setDate(date.getDate() - 7);
const sevenDaysAgoISO = date.toISOString();

export default sevenDaysAgoISO;
