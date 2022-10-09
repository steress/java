function Books(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
        this.sayName = function() {
            return title + " by " + author + ", " + pages + " pages" + ", " + read;
        };
    }
const hob = new Books ("The Hobbit", "J.R.R. Tolkien", "345", "I did not read it yet.");
// function Player(name, marker) {
//     this.name = name
//     this.marker = marker
//     this.sayName = function() {
//       console.log(name)
//     }
//   }
  
//   const player1 = new Player('steve', 'X')
//   const player2 = new Player('also steve', 'O')