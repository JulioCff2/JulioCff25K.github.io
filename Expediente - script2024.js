document.addEventListener('DOMContentLoaded', function() {
 const monthYear = document.getElementById('month-year');
 const daysContainer = document.getElementById('days');
 const prevButton = document.getElementById('prev');
 const nextButton = document.getElementById('next');
 const months = [
  'Enero', 
  'Febrero', 
  'Marzo', 
  'Abril', 
  'Mayo', 
  'Junio',
  'Julio', 
  'Agosto', 
  'Septiembre', 
  'Octubre', 
  'Noviembre', 
  'Diciembre'
 ];
 
 let currentDate = new Date();
 let today = new Date();
 
 function renderCalendar(date) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const firstDay = new Date(year,month, 1).getDay();
  const lastDay = new Date(year,month + 1, 0).getDate();
  
  monthYear.textContent = `${months[month]} ${year}`;
  daysContainer.innerHTML = '';
  
  //Fechas del mes anterior
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = firstDay; i > 0; i--) {
   const dayDiv = document.createElement('div');
   dayDiv.textContent = prevMonthLastDay - i + 1;
   dayDiv.classList.add('fade');
   daysContainer.appendChild(dayDiv);
  }
  
  //Fecha del mes actual
  for (let i = 1; i <= lastDay; i++) {
   const dayDiv = document.createElement('div');
   dayDiv.textContent = i;
   if (i === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
    dayDiv.classList.add('today');
   }
   daysContainer.appendChild(dayDiv);
  }
  
  //fechas del proximo mes
  const nextMonthStartDay = 7 - new Date(year, month + 1, 0).getDay() - 1;
  for (let i = 1; i <= nextMonthStartDay; i++) {
   const dayDiv = document.createElement('div');
   dayDiv.textContent = i;
   dayDiv.classList.add('fade');
   daysContainer.appendChild(dayDiv);
  }
 }
 
 prevButton.addEventListener('click', function () {
  currentDate.setMonth(currentDate.getMonth() - 1);
  renderCalendar(currentDate);
 });
 
 nextButton.addEventListener('click', function () {
  currentDate.setMonth(currentDate.getMonth() + 1);
  renderCalendar(currentDate);
 });
 
 renderCalendar(currentDate);
 
 const volverMenuButton = document.createElement('button');
 volverMenuButton.textContent = 'Volver al menu';
 volverMenuButton.onclick = function() {
  if (confirm("Esta seguro de que desea volver al menu?")) {
   window.location.href = 'MenuPersonal.html';
  }
 };
 
 document.body.appendChild(volverMenuButton);
});
