 const aTags = document.querySelectorAll('a');

 aTags.forEach(a => {
     a.addEventListener('click', e => {
        const href = e.target.getAttribute('href');
         if(href.includes('http') && !confirm('Dis bir baglantiya gidiyorsun')){
            e.preventDefault();
         }
     })
 })
 const test1 = document.querySelector('.test1');
 const test2 = document.querySelector('.test2');
 const test3 = document.querySelector('.test3');
 
 test3.addEventListener('click', () =>{ 
    console.log('test3')
});
 test2.addEventListener('click', () => {
    console.log('test2')
 });
 test1.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log('test1')
 });

 const todos = document.getElementById('todos');

 todos.querySelectorAll('li').forEach(li => {
     li.addEventListener('click', e => {
        e.target.classList.toggle('completed')
    })
 })

 //todos.querySelectorAll('li').forEach(li => {