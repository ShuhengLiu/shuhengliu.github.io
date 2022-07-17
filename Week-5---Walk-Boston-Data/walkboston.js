function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = '';
  for (let i = 0; i < len; i++) {
    html +=
      '<li class="post">' + '<h2>' + people[i][8] + '</h2>' + '<h3>' + people[i][11] + '</h3>';
      
  }

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
  let topSalaries="";
  let people_salary=[];
  
  for(let i=0;i<boston.data.length;i++){
    people_salary.push({name:people[i][8],salary:people[i][11]});
  }
  people_salary.sort((a,b)=>b.salary-a.salary)
  for(let i=0;i<5;i++){
    topSalaries+='<li class="post">' + '<h2>' + people_salary[i].name + '</h2>' + '<h3>' + people_salary[i].salary + '</h3>';
  }
  
  function is_greater_than_200k(people_salary){
    return people_salary.salary>=200000;
  }
  big_salaries=people_salary.filter(is_greater_than_200k);
  topEmployees='';
  for(let i=0;i<big_salaries.length;i++){
    topEmployees+='<li class="post">' + '<h2>' + big_salaries[i].name + '</h2>' + '<h3>' + big_salaries[i].salary + '</h3>';

  }
  container.innerHTML='<ul id="data">'+topEmployees+"</ul>";
}
renderPosts(boston, document.getElementById('container'));
