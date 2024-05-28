export default function formatDate(dateString) {
    const date = new Date(dateString);

  // Convert UTC time to IST time
  const istOffset = 0 * 60 * 60 * 1000; // IST offset in milliseconds
  const istDate = new Date(date.getTime() + istOffset);

  const now = new Date();
  const nowInIST = new Date(now.getTime() + istOffset);

  // Reset the time part of dates for comparison
  const istDateWithoutTime = new Date(istDate.getFullYear(), istDate.getMonth(), istDate.getDate());
  const nowWithoutTime = new Date(nowInIST.getFullYear(), nowInIST.getMonth(), nowInIST.getDate());

  const diffDays = (nowWithoutTime - istDateWithoutTime) / (24 * 60 * 60 * 1000);

  let datePart;
  if (diffDays === 0) {
    datePart = 'today';
  } else if (diffDays === 1) {
    datePart = 'yesterday';
  } else {
    const options = { day: '2-digit', month: 'short' };
    datePart = istDate.toLocaleDateString('en-US', options);
  }

  // Format the time part
  const hours = istDate.getHours().toString().padStart(2, '0');
  const minutes = istDate.getMinutes().toString().padStart(2, '0');
  const timePart = `${hours}:${minutes}`;

  return `${datePart} ${timePart}`;

  }
  
  