(function() {
  class Student {
    constructor(
      private firstName: string,
      private middleInitial: string,
      private lastName: string
    ) {}

    getFullName() {
      return `    
                    First: ${this.firstName} 
                    Middle: ${this.middleInitial}
                    Last: ${this.lastName}`;
    }
  }

  let student = new Student('John', 'D', 'Rockefeller');
  console.log(student.getFullName());

  let html = `<div class="container">
                    <div class="row">
                        <p>
                        Here is some text that 
                        I want to show on a page.
                        </p>
                    </div>
                </div>`;

  console.log(html);
})();
