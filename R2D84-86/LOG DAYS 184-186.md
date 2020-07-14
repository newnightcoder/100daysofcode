**LOG R2D84-86** (14/07/20)

link to my daily tweets [here](https://twitter.com/Nightcoder2/status/1282413601937031169) and [here](https://twitter.com/Nightcoder2/status/1282867293794578436)


**what i did:**

- after deciding to rewrite everything, i started realizing it was a form of procrastination regarding the REAL issue at hand here: fixing this annoying bug happening when 2 or more items of the to-do list are identical (it's an unlikely edge case BUT to fix nevertheless. it was really looking not good, because the localStorage wouldn't update properly + several items but not all of them got randomly deleted)
- after looking for a solution for 2 days, it just hit me now: to check the typeOf() the id in the array and the class ${id} i gave and of course the class was a STRING not a number, hence the impossibility for my somewhat logical code to get to work!!!
- now it's all working nicely!!! i feel so happy to have found the solution myself!!! i have more and more ideas when it comes to finding solutions!! (though i still go through some anxiety/pressure/unease when i keep trying logical things for a while and nothing works, but that's ok, my usual beginner up and downs lol!)


**what i learned**

- a lot!!! 
  - CSS calc() with SASS variables: #{ $variable } + or - etc.... 
  - adding variable class to an element using template literal, awesome!!! class = ${variable} 
  - SPA behaviour thanks to html a tags (links) + :target : of course! (but some JS is needed as well in my case)
  - how to deal with url on page refresh/reload!!! i now know it's possible and found a great [gist](https://gist.github.com/azu/36ba5a80feb857c77a3a)
  - use of parseInt() or Number() to convert a string to a number!! parseInt takes 2 arguments: the string and the radix (mathematical base, here and in general: 10).


**next:**

- finish debugging and publish online. let's go!
