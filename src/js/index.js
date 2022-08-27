const minTime = 9;
const maxTime = 21;
const step = 1;
const bookingData = {
    date: '',
    time: '',
}

const calcMinDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return `${year}-0${month}-${date}`;
};

const minDate = calcMinDate();

const setMinDate = () => {
  const input = document.getElementById("inputDate");
  input.setAttribute("min", minDate);
};

const saveDateToLS = (event) => {
  const value = event.target.value;
  bookingData.date = value;
  localStorage.setItem("date", value);
};

const getDataFromLS = (key) => {
  return localStorage.getItem(key);
};

const setCurrentDate = () => {
  const date = getDataFromLS("date");
  const input = document.getElementById("inputDate");
  input.value = date;
};

const setTimeOptions = () => {
  const el = document.getElementById("timeOptions");

  for (let index = minTime; index < maxTime + step; index += step) {
    const option = document.createElement('option');
    option.innerHTML = `${index}:00`;
    el.append(option);
  }
}

const setSessionData = () => {
    const sessionInfo = document.getElementById('sessionInfo');
    sessionInfo.innerHTML = `дата ${bookingData.date}, время ${bookingData.time}`;
}

const selectTime = (event) => {
    const value = event.target.value;
    bookingData.time = value;

    setSessionData();
    showModal();
}

const showModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.remove('hidden');
}

const hideModal = () => {
    const modal = document.getElementById('modal');
    modal.classList.add('hidden');
}



setMinDate();
setCurrentDate();
setTimeOptions();
