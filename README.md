# Week 5 — CI/CD 

This repository contains the files we'll use during the Week 5 CI/CD session and an intentionally "error-filled" example file used for linting/formatting exercises.

Files we'll be using today
- `code.ts` — main TypeScript exercise file.
- `eslint.config.mts` — ESLint configuration used in the workshop.
- `package.json` — project metadata and scripts (install/test/lint).
- `LICENSE` — project license.
- `README.md` — this file (simple guide and embedded error sample).

Fake "error-filled" file (for the linting/formatting exercise)

The following is the raw contents of the example file we'll use in class. It's intentionally messy so you can practice linting, formatting, and fixing errors.

```javascript
function   sayHello(name ){console.log("Hello " +   name )
}

function add(a , b){ const   c =  a +b ; return  c }

async function   main ( ){
 const user="Brandon"
sayHello(   user )
const result=add(  5 ,   10 )   
 console.log("result:",result )
 const unused=123
 if(result>10){console.log("big number")
 }else{ console.log("small")}

}

 main(   )
```

How to use this repo today
- Open `code.ts` and follow the exercise comments.
- Run the linter/formatter (we'll use the project's ESLint config) and apply fixes to the error-filled file sample.
- Use `package.json` scripts for install/test/lint where applicable.

If you want the error-filled file separated into its own file, let me know and I will add it (for now it's embedded above so it's easy to copy/paste during the session).

---

